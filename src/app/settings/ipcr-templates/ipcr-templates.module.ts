import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IpcrTemplatesRoutingModule } from './ipcr-templates-routing.module';
import { IpcrTemplatesComponent } from './ipcr-templates.component';


@NgModule({
  declarations: [
    IpcrTemplatesComponent
  ],
  imports: [
    CommonModule,
    IpcrTemplatesRoutingModule
  ]
})
export class IpcrTemplatesModule { }
