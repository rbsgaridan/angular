import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrgUnitsRoutingModule } from './org-units-routing.module';
import { OrgUnitsComponent } from './org-units.component';


@NgModule({
  declarations: [
    OrgUnitsComponent
  ],
  imports: [
    CommonModule,
    OrgUnitsRoutingModule
  ]
})
export class OrgUnitsModule { }
