import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CoreModule} from './modules/core/core.module';
import {HttpClientModule} from '@angular/common/http';
import {RegisterModule} from './modules/register/register.module';
import {HomeModule} from './modules/home/home.module';
import {LoginModule} from './modules/login/login.module';
import {AuthTokenStorageService} from './services/auth-token-storage.service';
import {MainComponent} from './modules/home/main/main.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    RegisterModule,
    HomeModule,
    LoginModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [AuthTokenStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
