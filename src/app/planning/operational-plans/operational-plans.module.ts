import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperationalPlansRoutingModule } from './operational-plans-routing.module';
import { OperationalPlansComponent } from './operational-plans.component';


@NgModule({
  declarations: [
    OperationalPlansComponent
  ],
  imports: [
    CommonModule,
    OperationalPlansRoutingModule
  ]
})
export class OperationalPlansModule { }
