import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OperationalPlansComponent } from './operational-plans.component';

const routes: Routes = [{ path: '', component: OperationalPlansComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperationalPlansRoutingModule { }
