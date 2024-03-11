import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './MyModule/homepage/homepage.component';
import { TopRatedCourseComponent } from './MyModule/top-rated-course/top-rated-course.component';
import { HeaderComponent } from './MyModule/header/header.component';
import { FooterComponent } from './MyModule/footer/footer.component';
import { UserDashboardComponent } from './MyModule/user-dashboard/user-dashboard.component';
import { NotfoundComponent } from './MyModule/notfound/notfound.component';

import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LoginComponent } from './MyModule/login/login.component';
import { RegistrationComponent } from './MyModule/registration/registration.component';
import { MyaccountComponent } from './MyModule/user-dashboard/dashboardComp/myaccount/myaccount.component';
import { MyCoursesComponent } from './MyModule/user-dashboard/dashboardComp/my-courses/my-courses.component';
import { ChangePasswordComponent } from './MyModule/user-dashboard/dashboardComp/change-password/change-password.component';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { MatSelectModule } from '@angular/material/select';
import { RegistrationService } from './Services/auth/registration.service';
import { LoginService } from './Services/login/login.service';
import { TopRatedCoursesService } from './Services/top-rated-courses/top-rated-courses.service';
import { AdminDashboardComponent } from './MyModule/admin-dashboard/admin-dashboard.component';
import { SidebarComponent } from './MyModule/admin-dashboard/sidebar/sidebar.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainContentComponent } from './MyModule/admin-dashboard/main-content/main-content.component';
import { TopWidgetsComponent } from './MyModule/admin-dashboard/top-widgets/top-widgets.component';
import { SalesByMonthsComponent } from './MyModule/admin-dashboard/sales-by-months/sales-by-months.component';
import { SalesByCategoryComponent } from './MyModule/admin-dashboard/sales-by-category/sales-by-category.component'; 
import { ChartModule } from 'angular-highcharts';
import { faFontAwesome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UsersComponent } from './MyModule/admin-dashboard/admin-comp/users/users.component';
import { AddCourseComponent } from './MyModule/admin-dashboard/admin-comp/add-course/add-course.component';
import { ViewCourseComponent } from './MyModule/admin-dashboard/admin-comp/view-course/view-course.component';
import { HelpComponent } from './MyModule/admin-dashboard/admin-comp/help/help.component';
import { UserDetailsTemplateComponent } from './MyModule/admin-dashboard/admin-comp/user-details-template/user-details-template.component';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { CourseDisplayTemplateComponent } from './MyModule/admin-dashboard/admin-comp/course-display-template/course-display-template.component';
import { CourseplayerComponent } from './MyModule/courseplayer/courseplayer.component';
import { SocketService } from './Services/socket/socket.service';
import { CoursessidebarComponent } from './MyModule/coursessidebar/coursessidebar.component';
import { CommonModule } from '@angular/common';
import { CardTemplateComponent } from './MyModule/card-template/card-template.component';
import { NotificationComponent } from './MyModule/admin-dashboard/admin-comp/notification/notification.component';
import { NotificationTemplateComponent } from './MyModule/notification-template/notification-template.component';
import { TestComponent } from './MyModule/courseplayer/test/test.component';
import { OverviewComponent } from './MyModule/courseplayer/overview/overview.component';
import { ReviewsComponent } from './MyModule/courseplayer/reviews/reviews.component';
import { ResourcesComponent } from './MyModule/courseplayer/resources/resources.component';
import { CommentsComponent } from './MyModule/courseplayer/comments/comments.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    TopRatedCourseComponent,
    HeaderComponent,
    FooterComponent,
    UserDashboardComponent,
    NotfoundComponent,
    LoginComponent,
    RegistrationComponent,
    MyaccountComponent,
    MyCoursesComponent,
    ChangePasswordComponent,
    AdminDashboardComponent,
    SidebarComponent,
    MainContentComponent,
    TopWidgetsComponent,
    SalesByMonthsComponent,
    SalesByCategoryComponent,
    UsersComponent,
    AddCourseComponent,
    ViewCourseComponent,
    HelpComponent,
    UserDetailsTemplateComponent,
    CourseDisplayTemplateComponent,
    CourseplayerComponent,
    CoursessidebarComponent,
    CardTemplateComponent,
    NotificationComponent,
    NotificationTemplateComponent,
    CourseplayerComponent,
    TestComponent,
    OverviewComponent,
    ReviewsComponent,
    ResourcesComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    ChartModule,
    FontAwesomeModule,
    MatCardModule,
    MatTableModule,
    CommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [
    provideAnimationsAsync(),
    RegistrationService,
    LoginService,
    TopRatedCoursesService,
    RegistrationService,
    CookieService,
    SocketService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
