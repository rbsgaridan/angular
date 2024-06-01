import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TargetsRoutingModule } from './targets-routing.module';
import { TargetsComponent } from './targets.component';
import { OfficeTargetsComponent } from './components/office-targets/office-targets.component';
import { DepartmentTargetsComponent } from './components/department-targets/department-targets.component';
import { IndividualTargetsComponent } from './components/Individual-targets/Individual-targets.component';


@NgModule({
  declarations: [
    TargetsComponent,
    OfficeTargetsComponent,
    DepartmentTargetsComponent,
    IndividualTargetsComponent
  ],
  imports: [
    CommonModule,
    TargetsRoutingModule
  ]
})
export class TargetsModule { }
