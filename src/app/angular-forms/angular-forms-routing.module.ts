import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TdFormsComponent } from './td-forms/td-forms.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';

const routes: Routes = [
  { path: '', redirectTo: 'template-driven', pathMatch: 'full' },
  { path: 'template-driven', component: TdFormsComponent },
  { path: 'reactive', component: ReactiveFormsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularFormsRoutingModule { }
export const AngularFormsRoutingComponents = [
  TdFormsComponent,
  ReactiveFormsComponent
];
