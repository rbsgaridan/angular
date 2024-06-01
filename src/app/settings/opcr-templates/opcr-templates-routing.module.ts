import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpcrTemplatesComponent } from './opcr-templates.component';

const routes: Routes = [{ path: '', component: OpcrTemplatesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OpcrTemplatesRoutingModule { }
