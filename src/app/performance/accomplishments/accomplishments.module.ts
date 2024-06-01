import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccomplishmentsRoutingModule } from './accomplishments-routing.module';
import { AccomplishmentsComponent } from './accomplishments.component';
import { DepartmentAccompComponent } from './components/department-accomp/department-accomp.component';
import { OfficeAccompComponent } from './components/office-accomp/office-accomp.component';
import { IndividualAccompComponent } from './components/individual-accomp/individual-accomp.component';


@NgModule({
  declarations: [
    AccomplishmentsComponent,
    OfficeAccompComponent,
    DepartmentAccompComponent,
    IndividualAccompComponent
  ],
  imports: [
    CommonModule,
    AccomplishmentsRoutingModule
  ]
})
export class AccomplishmentsModule { }
