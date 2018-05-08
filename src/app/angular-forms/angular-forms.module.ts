import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularFormsRoutingModule, AngularFormsRoutingComponents } from './angular-forms-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFormsRoutingModule
  ],
  declarations: [
    AngularFormsRoutingComponents
  ]
})
export class AngularFormsModule { }
