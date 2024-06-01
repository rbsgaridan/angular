import { ListService, PagedResultDto } from '@abp/ng.core';
import { Confirmation, ConfirmationService } from '@abp/ng.theme.shared';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StrategicPlansService } from '@proxy/planning';
import { StrategicPlanDto } from '@proxy/planning/strategic-plans';

@Component({
  selector: 'app-strategic-plans',
  templateUrl: './strategic-plans.component.html',
  styleUrls: ['./strategic-plans.component.scss'],
  providers: [ListService]
})
export class StrategicPlansComponent implements OnInit{
  strategicPlans: PagedResultDto<StrategicPlanDto> = { items: [], totalCount: 0 };
  keyword = '';
  isModalOpen = false;
  form: FormGroup;
  selectedStratPlan: StrategicPlanDto = {} as StrategicPlanDto;

  constructor(
    public readonly list: ListService,
    private strategicPlansService: StrategicPlansService,
    private fb: FormBuilder,
    private confirmation: ConfirmationService
  ) {}

  ngOnInit(): void {
    const surveyTemplateStreamCreator = (query) => {
      return this.strategicPlansService.getList({
        ...query,
        title: this.keyword,
        description: this.keyword
      });
    };

    this.list.hookToQuery(surveyTemplateStreamCreator).subscribe((response) => {
      this.strategicPlans = response as PagedResultDto<StrategicPlanDto>;
    });
  }

  onSearch(): void {
    console.log("Searching...");
    // const query = { code: this.keyword }; // Adjust the query parameter based on the API
    // this.list.filter = JSON.stringify(query);
    this.list.filter = this.keyword;
    this.list.get();
  }

  createSurveyTemplate() {
    this.selectedStratPlan = {} as StrategicPlanDto;
    this.buildForm();
    this.isModalOpen = true;
  }

  editSurveyTemplate(id: string) {
    this.strategicPlansService.get(id).subscribe((template) => {
      this.selectedStratPlan = template;
      this.buildForm();
      this.isModalOpen = true;
    });
  }

  buildForm() {
    this.form = this.fb.group({
      title: [this.selectedStratPlan.title || '', Validators.required],
      description: [this.selectedStratPlan.description || '']
    });
  }

  save() {
    if (this.form.invalid) {
      return;
    }

    if (this.selectedStratPlan.id) {
      this.strategicPlansService
        .update(this.selectedStratPlan.id, this.form.value)
        .subscribe(() => {
          this.isModalOpen = false;
          this.form.reset();
          this.list.get();
        });
    } else {
      this.strategicPlansService.create(this.form.value).subscribe(() => {
        this.isModalOpen = false;
        this.form.reset();
        this.list.get();
      });
    }
  }

  deleteSurveyTemplate(id: string) {
    this.confirmation.warn('::AreYouSureToDelete', '::AreYouSure')
      .subscribe((status) => {
        if (status === Confirmation.Status.confirm) {
          this.strategicPlansService.delete(id).subscribe(() => this.list.get());
        }
      });
  }
}
