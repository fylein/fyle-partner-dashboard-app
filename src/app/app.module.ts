import { APP_INITIALIZER, ErrorHandler, isDevMode, NgModule } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { JwtInterceptor } from './core/interceptors/jwt.interceptor';

import * as Sentry from '@sentry/angular';

// Angular libraries
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// External libraries
import { IconSpriteModule } from 'ng-svg-icon-sprite';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { InputTextModule } from 'primeng/inputtext';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { GlobalErrorHandler } from './app.error-handling';
import { provideTransloco, TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { firstValueFrom } from 'rxjs';
import { TranslocoHttpLoader } from './transloco-http-loader';
import { provideTranslocoMessageformat } from '@jsverse/transloco-messageformat';

@NgModule({ declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ToastModule,
        InputTextModule,
        IconSpriteModule.forRoot({ path: 'assets/sprites/sprite.svg' }),
        TranslocoModule], providers: [
        CurrencyPipe,
        MessageService,
        provideTransloco({
            config: {
                availableLangs: ['en'],
                defaultLang: 'en',
                reRenderOnLangChange: true,
                prodMode: !isDevMode()
            },
            loader: TranslocoHttpLoader
        }),
        provideTranslocoMessageformat(),
        {
            provide: APP_INITIALIZER,
            useFactory: (transloco: TranslocoService) => {
                return () =>
                firstValueFrom(transloco.load('en')).then(() => {
                    transloco.setActiveLang('en');
                });
            },
            deps: [TranslocoService],
            multi: true
        },
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
        },
        provideHttpClient(withInterceptorsFromDi())
    ] })
export class AppModule { }

