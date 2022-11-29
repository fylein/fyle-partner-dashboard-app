import { ErrorHandler, NgModule } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { JwtInterceptor } from './core/interceptors/jwt.interceptor';

import * as Sentry from '@sentry/angular';

// Angular libraries
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// External libraries
import { IconSpriteModule } from 'ng-svg-icon-sprite';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { InputTextModule } from 'primeng/inputtext';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { GlobalErrorHandler } from './app.error-handling';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastModule,
    InputTextModule,
    IconSpriteModule.forRoot({ path: 'assets/sprites/sprite.svg' })
  ],
  providers: [
    CurrencyPipe,
    MessageService,
    {
      provide: JWT_OPTIONS,
      useValue: JWT_OPTIONS
    },
    JwtHelperService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler
    },
    {
      provide: ErrorHandler,
      useValue: Sentry.createErrorHandler({
        showDialog: false
      })
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

