import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component1Component as Scenario1Component1Component } from './component1/component1.component';

@NgModule({
  declarations: [
    Scenario1Component1Component
  ],
  imports: [
    CommonModule
  ],
  exports: [
    Scenario1Component1Component
  ]
})
export class Scenario1Module { }
