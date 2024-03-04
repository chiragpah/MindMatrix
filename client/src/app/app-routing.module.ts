import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'instructor',
   // canActivate:[AuthGuard],
    data:{
      role:'instructor'
    },
    loadChildren: () =>
      import('./instructor/instructor.module').then((m) => m.InstructorModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
