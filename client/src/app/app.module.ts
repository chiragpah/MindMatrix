import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CourseDescriptionComponent } from './course-description/course-description.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { CardsComponent } from './cards/cards.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CoursepageComponent } from './coursepage/coursepage.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { CourseplayerComponent } from './courseplayer/courseplayer.component';
import { CoursesidebarComponent } from './coursesidebar/coursesidebar.component';
import { OtpComponent } from './otp/otp.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { ChangePasswordComponent } from './user-dashboard/dashboardComp/change-password/change-password.component';
import { MyCoursesComponent } from './user-dashboard/dashboardComp/my-courses/my-courses.component';
import { MyaccountComponent } from './user-dashboard/dashboardComp/my-account/my-account.component';

// import { SideNavComponent } from './Admin/side-nav/side-nav.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// import { AddModuleComponent } from './Admin/add-module/add-module.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { AdminComponent } from './user-dashboard/dashboardComp/admin/admin.component';
import { SideNavComponent } from './user-dashboard/dashboardComp/side-nav/side-nav.component';
import { MainComponent } from './user-dashboard/dashboardComp/main/main.component';
import { TopWidgetsComponent } from './user-dashboard/dashboardComp/main/top-widgets/top-widgets.component';
import { SalesByCategoryComponent } from './user-dashboard/dashboardComp/main/sales-by-category/sales-by-category.component';
import { SalesByMonthComponent } from '../../src/app/user-dashboard/dashboardComp/main/sales-by-month/sales-by-month.component';
import { ChartModule } from 'angular-highcharts';
import { TopThreeProductsComponent } from './user-dashboard/dashboardComp/main/top-three-products/top-three-products.component';
import { CourseUploadComponent } from './user-dashboard/dashboardComp/admin/course-upload/course-upload.component';
import { FaqComponent } from './faq/faq.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { StarRatingComponent } from './feedback/star-rating/star-rating.component';
import { TopRatedCourseComponent } from './top-rated-course/top-rated-course.component';
import { LastFewTransactionsComponent } from './user-dashboard/dashboardComp/main/last-few-transactions/last-few-transactions.component';
import { PaymentComponent } from './payment/payment.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { UsersComponent } from './user-dashboard/dashboardComp/users/users.component';
import { ViewCourseComponent } from './user-dashboard/dashboardComp/view-course/view-course.component';
import { CourseDisplayTemplateComponent } from './user-dashboard/dashboardComp/course-display-template/course-display-template.component';
import { OrderHistoryComponent } from './user-dashboard/dashboardComp/order-history/order-history.component';
import { QuizComponent } from './quiz/quiz.component';
import { ScoreDialogComponent } from './score-dialog/score-dialog.component';
import { NotificationTemplateComponent } from './notification-template/notification-template.component';
import { OverviewComponent } from './courseplayer/overview/overview.component';
import { ResourcesComponent } from './courseplayer/resources/resources.component';
import { CommentsComponent } from './courseplayer/comments/comments.component';
// import { ReviewsComponent } from './courseplayer/reviews/reviews.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CourseDescriptionComponent,
    LoginComponent,
    RegistrationComponent,
    CardsComponent,
    FooterComponent,
    HomepageComponent,
    CoursepageComponent,
    ForgotpasswordComponent,
    CourseplayerComponent,
    CoursesidebarComponent,
    OtpComponent,
    UserDashboardComponent,
    ChangePasswordComponent,
    MyCoursesComponent,
    MyaccountComponent,
    AdminComponent,
    SideNavComponent,
    MainComponent,
    TopWidgetsComponent,
    SalesByCategoryComponent,
    SalesByMonthComponent,
    MainComponent,
    TopThreeProductsComponent,
    CourseUploadComponent,
    FaqComponent,
    AboutUsComponent,
    FeedbackComponent,
    StarRatingComponent,
    TopRatedCourseComponent,
    LastFewTransactionsComponent,
    PaymentComponent,
    ConfirmComponent,
    UsersComponent,
    ViewCourseComponent,
    CourseDisplayTemplateComponent,
    OrderHistoryComponent,
    QuizComponent,
    ScoreDialogComponent,
    NotificationTemplateComponent,
    OverviewComponent,
    ResourcesComponent,
    CommentsComponent,
    // ReviewsComponent,






  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    FontAwesomeModule,
    NgSelectModule,
    ChartModule

  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
