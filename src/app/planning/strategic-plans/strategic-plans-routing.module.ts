import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StrategicPlansComponent } from './strategic-plans.component';

const routes: Routes = [{ path: '', component: StrategicPlansComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StrategicPlansRoutingModule { }
