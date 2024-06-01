import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccomplishmentsComponent } from './accomplishments.component';
import { OfficeAccompComponent } from './components/office-accomp/office-accomp.component';
import { DepartmentAccompComponent } from './components/department-accomp/department-accomp.component';
import { IndividualAccompComponent } from './components/individual-accomp/individual-accomp.component';

const routes: Routes = [
  { path: '', component: AccomplishmentsComponent },
  { path: 'office', component: OfficeAccompComponent },
  { path: 'department', component: DepartmentAccompComponent },
  { path: 'individual', component: IndividualAccompComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccomplishmentsRoutingModule { }
