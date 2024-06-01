import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OpcrTemplatesRoutingModule } from './opcr-templates-routing.module';
import { OpcrTemplatesComponent } from './opcr-templates.component';


@NgModule({
  declarations: [
    OpcrTemplatesComponent
  ],
  imports: [
    CommonModule,
    OpcrTemplatesRoutingModule
  ]
})
export class OpcrTemplatesModule { }
