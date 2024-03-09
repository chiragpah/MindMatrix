import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizComponent } from './quiz/quiz.component'

const routes: Routes = [
  // Existing routes
  // Add a new route for the course detail page
  // { path: '', redirectTo: '/courses', pathMatch: 'full' },
  { path: 'quiz', component: QuizComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
