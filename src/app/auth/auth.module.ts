import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { FyleCallbackComponent } from './fyle-callback/fyle-callback.component';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';

// External libraries
import { IconSpriteModule } from 'ng-svg-icon-sprite';
import { ButtonModule } from 'primeng/button';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [
    LoginComponent,
    LogoutComponent,
    FyleCallbackComponent,
    AuthComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ButtonModule,
    ProgressSpinnerModule,
    ToastModule,
    IconSpriteModule.forRoot({ path: 'assets/sprites/sprite.svg' })
  ]
})
export class AuthModule { }
