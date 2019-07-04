import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Scenario1Module } from './scenario1/scenario1.module';

import { Scenario7Module } from './scenario7/scenario7.module';


import { Component1Component as Scenario2Component1Component } from './scenario2/component1/component1.component';
import { Component1Component as Scenario3Component1Component } from './scenario3/component1/component1.component';
import { Component2Component as Scenario3Component2Component } from './scenario3/component2/component2.component';
import { Component1Component as Scenario4Component1Component } from './scenario4/component1/component1.component';
import { Component2Component as Scenario4Component2Component } from './scenario4/component2/component2.component';
import { Component1Component as Scenario5Component1Component } from './scenario5/component1/component1.component';
import { Component2Component as Scenario5Component2Component } from './scenario5/component2/component2.component';
import { Component3Component as Scenario5Component3Component } from './scenario5/component3/component3.component';
import { Component1Component as Scenario6Component1Component } from './scenario6/component1/component1.component';
import { Component2Component as Scenario6Component2Component } from './scenario6/component2/component2.component';
import { Component3Component as Scenario6Component3Component } from './scenario6/component3/component3.component';
// Change imports for Scenario6 and import module instead of components.
@NgModule({
  declarations: [
    AppComponent,
    Scenario2Component1Component,
    Scenario3Component1Component,
    Scenario3Component2Component,
    Scenario4Component1Component,
    Scenario4Component2Component,
    Scenario5Component1Component,
    Scenario5Component2Component,
    Scenario5Component3Component,
    Scenario6Component1Component,
    Scenario6Component2Component,
    Scenario6Component3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Scenario1Module,
    Scenario7Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
