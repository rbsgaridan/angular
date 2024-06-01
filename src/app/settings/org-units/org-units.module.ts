import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrgUnitsRoutingModule } from './org-units-routing.module';
import { OrgUnitsComponent } from './org-units.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { DragDropModule } from 'primeng/dragdrop';


@NgModule({
  declarations: [
    OrgUnitsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    OrgUnitsRoutingModule,
    OrganizationChartModule,
    ScrollPanelModule,
    DragDropModule

  ]
})
export class OrgUnitsModule { }
