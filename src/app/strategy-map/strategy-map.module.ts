import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StrategyMapRoutingModule } from './strategy-map-routing.module';
import { StrategyMapComponent } from './strategy-map.component';


@NgModule({
  declarations: [
    StrategyMapComponent
  ],
  imports: [
    CommonModule,
    StrategyMapRoutingModule
  ]
})
export class StrategyMapModule { }
