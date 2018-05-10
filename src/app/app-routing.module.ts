import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'forms', loadChildren: './angular-forms/angular-forms.module#AngularFormsModule' },
  { path: 'change-detection', loadChildren: './change-detection/change-detection.module#ChangeDetectionModule' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [PageNotFoundComponent]
})
export class AppRoutingModule { }

export const AppRoutingComponents = [
  HomeComponent
];
