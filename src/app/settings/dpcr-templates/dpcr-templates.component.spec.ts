import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DpcrTemplatesComponent } from './dpcr-templates.component';

describe('DpcrTemplatesComponent', () => {
  let component: DpcrTemplatesComponent;
  let fixture: ComponentFixture<DpcrTemplatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DpcrTemplatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DpcrTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
