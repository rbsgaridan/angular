import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DpcrTemplatesComponent } from './dpcr-templates.component';

const routes: Routes = [{ path: '', component: DpcrTemplatesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DpcrTemplatesRoutingModule { }
