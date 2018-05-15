import {NgModule} from '@angular/core';
import {DashboardComponent} from './dashboard.component';
import {FooterComponent} from './footer/footer.component';
import {TopoComponent} from './topo/topo.component';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {DashboardRoutingModule} from './dashboard.routing.module';
import { HomeComponent } from './home/home.component';



@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        BrowserAnimationsModule,
        DashboardRoutingModule
    ],
    exports: [],
    declarations: [
        DashboardComponent,
        TopoComponent,
        FooterComponent,
        HomeComponent,
    ],
    providers: [],
})
export class DashboardModule {
}
