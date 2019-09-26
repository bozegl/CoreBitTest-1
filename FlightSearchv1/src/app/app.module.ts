import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule }   from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CustomMaterialModule} from './material.module'
import {MatNativeDateModule} from '@angular/material/core';
import { FlightListComponent } from './flight-list/flight-list.component';
import { Routes,RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HttpClientModule, HttpClient, HttpInterceptor, HttpHandler } from '@angular/common/http';

const appRoutes: Routes = [
  { path: 'Layout', component: LayoutComponent },
  { path: '', redirectTo: 'Layout', pathMatch: 'full' },
  { path: 'FlightList', component: FlightListComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    FlightListComponent,
    LayoutComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    MatNativeDateModule,
    RouterModule.forRoot(appRoutes, { useHash: true }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
