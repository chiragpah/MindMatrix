import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './MyModules/courses/courses.component';

const routes: Routes = [ {path:'',redirectTo:'courses', pathMatch:'full'},
  {path:'courses', component:CoursesComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
