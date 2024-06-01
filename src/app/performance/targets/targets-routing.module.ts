import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TargetsComponent } from './targets.component';
import { OfficeTargetsComponent } from './components/office-targets/office-targets.component';
import { DepartmentTargetsComponent } from './components/department-targets/department-targets.component';
import { IndividualTargetsComponent } from './components/Individual-targets/Individual-targets.component';

const routes: Routes = [
  { path: '', component: TargetsComponent },
  { path: 'office', component: OfficeTargetsComponent },
  { path: 'department', component: DepartmentTargetsComponent },
  { path: 'individual', component: IndividualTargetsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TargetsRoutingModule { }
