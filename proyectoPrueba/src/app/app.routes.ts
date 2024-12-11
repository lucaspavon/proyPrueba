import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { Section3Component } from './section3/section3.component';
import { Section1Component } from './section1/section1.component';
import { Section2Component } from './section2/section2.component';

export const routes: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: 'sectionONE', component: Section1Component},
    { path: 'section2', component: Section2Component},
    { path: 'section3', component: Section3Component}
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}
