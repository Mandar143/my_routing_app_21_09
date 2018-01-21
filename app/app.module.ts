import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { DashModule } from './dash/dash.module';
import { ErrModule } from './err/err.module';
import { RegisterModule } from './register/register.module';
import { ViewModule } from './view/view.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    DashModule,
    ErrModule,
    ViewModule,
    RegisterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
