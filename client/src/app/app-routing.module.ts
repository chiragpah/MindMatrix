import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { CoursepageComponent } from './coursepage/coursepage.component';
import { CourseDescriptionComponent } from './course-description/course-description.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { OtpComponent } from './otp/otp.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AdminComponent } from './user-dashboard/dashboardComp/admin/admin.component';
import { FaqComponent } from './faq/faq.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { CourseplayerComponent } from './courseplayer/courseplayer.component';
import { PaymentComponent } from './payment/payment.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { QuizComponent } from './quiz/quiz.component';
const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'courses',
    component: CoursepageComponent
  },

  { path: 'course/:id', component: CourseDescriptionComponent },
  { path: 'CoursePlayer/:id', component: CourseplayerComponent },
  {
    path: 'forgot-password',
    component: ForgotpasswordComponent
  },
  { path: 'otp', component: OtpComponent },
  { path: 'user-dashboard', component: UserDashboardComponent },
  { path: 'AdminDashboard', component: AdminComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'paypal/:id', component: PaymentComponent },

  { path: 'about-us', component: AboutUsComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'confirm', component: ConfirmComponent },
  { path: 'Test', component: QuizComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
