import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerformanceComponent } from './performance.component';

const routes: Routes = [
  { path: '', component: PerformanceComponent },
  { path: 'targets', loadChildren: () => import('./targets/targets.module').then(m => m.TargetsModule) },
  { path: 'accomplishments', loadChildren: () => import('./accomplishments/accomplishments.module').then(m => m.AccomplishmentsModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerformanceRoutingModule { }
