import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StrategicPlansRoutingModule } from './strategic-plans-routing.module';
import { StrategicPlansComponent } from './strategic-plans.component';


@NgModule({
  declarations: [
    StrategicPlansComponent
  ],
  imports: [
    CommonModule,
    StrategicPlansRoutingModule
  ]
})
export class StrategicPlansModule { }
