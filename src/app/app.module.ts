import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Angular libraries
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// External libraries
import { IconSpriteModule } from 'ng-svg-icon-sprite';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    IconSpriteModule.forRoot({ path: 'assets/sprites/sprite.svg' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
