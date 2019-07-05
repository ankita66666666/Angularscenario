import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';


@NgModule({
  declarations: [
    Component1Component,
    Component2Component
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    Component1Component
  ]
})
export class Scenario3Module { }
