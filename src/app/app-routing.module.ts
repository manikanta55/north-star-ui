import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutresortComponent } from './aboutresort/aboutresort.component';
import { DisplayComponent } from './display/display.component';

const routes: Routes = [
  { path: '', component: DisplayComponent},
  { path: 'home', component: DisplayComponent},
  { path: 'about', component: AboutresortComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
