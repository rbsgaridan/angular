import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DpcrTemplatesRoutingModule } from './dpcr-templates-routing.module';
import { DpcrTemplatesComponent } from './dpcr-templates.component';


@NgModule({
  declarations: [
    DpcrTemplatesComponent
  ],
  imports: [
    CommonModule,
    DpcrTemplatesRoutingModule
  ]
})
export class DpcrTemplatesModule { }
