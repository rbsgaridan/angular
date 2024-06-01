import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StrategicPlansRoutingModule } from './strategic-plans-routing.module';
import { StrategicPlansComponent } from './strategic-plans.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    StrategicPlansComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    StrategicPlansRoutingModule
  ]
})
export class StrategicPlansModule { }
