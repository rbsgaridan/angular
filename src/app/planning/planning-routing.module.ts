import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanningComponent } from './planning.component';

const routes: Routes = [{ path: '', component: PlanningComponent }, { path: 'strategic-plans', loadChildren: () => import('./strategic-plans/strategic-plans.module').then(m => m.StrategicPlansModule) }, { path: 'operational-plans', loadChildren: () => import('./operational-plans/operational-plans.module').then(m => m.OperationalPlansModule) },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanningRoutingModule { }
