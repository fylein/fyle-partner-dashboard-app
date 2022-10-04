import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartnerRoutingModule } from './partner-routing.module';
import { PartnerComponent } from './partner.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PartnerComponent
  ],
  imports: [
    CommonModule,
    PartnerRoutingModule,
    SharedModule
  ]
})
export class PartnerModule { }
