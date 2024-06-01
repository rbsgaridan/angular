import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrgUnitsComponent } from './org-units.component';

const routes: Routes = [{ path: '', component: OrgUnitsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrgUnitsRoutingModule { }
