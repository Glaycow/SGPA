import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClarityModule } from '@clr/angular';
import { LoginComponent } from './acesso/login/login.component';
import { CriarContaComponent } from './acesso/criar-conta/criar-conta.component';
import { AcessoComponent } from './acesso/acesso.component';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DashboardModule} from './dashboard/dashboard.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CriarContaComponent,
    AcessoComponent,
  ],
  imports: [
      BrowserModule,
      CommonModule,
      ReactiveFormsModule,
      FormsModule,
      BrowserAnimationsModule,
      AppRoutingModule,
      NgbModule.forRoot(),
      ClarityModule,
      DashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
