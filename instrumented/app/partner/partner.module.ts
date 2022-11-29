import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartnerRoutingModule } from './partner-routing.module';
import { PartnerComponent } from './partner.component';
import { SharedModule } from '../shared/shared.module';

// External libraries
import { IconSpriteModule } from 'ng-svg-icon-sprite';

@NgModule({
  declarations: [
    PartnerComponent
  ],
  imports: [
    CommonModule,
    PartnerRoutingModule,
    SharedModule,
    IconSpriteModule.forRoot({ path: 'assets/sprites/sprite.svg' })
  ]
})
export class PartnerModule { }
