import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StrategyMapComponent } from './strategy-map.component';

const routes: Routes = [{ path: '', component: StrategyMapComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StrategyMapRoutingModule { }
