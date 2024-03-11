import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './MyModule/homepage/homepage.component';
import { UserDashboardComponent } from './MyModule/user-dashboard/user-dashboard.component';
import { NotfoundComponent } from './MyModule/notfound/notfound.component';
import { LoginComponent } from './MyModule/login/login.component';
import { RegistrationComponent } from './MyModule/registration/registration.component';
import { AdminDashboardComponent } from './MyModule/admin-dashboard/admin-dashboard.component';

import { CourseDisplayTemplateComponent } from './MyModule/admin-dashboard/admin-comp/course-display-template/course-display-template.component';
import { CoursepageComponent } from './MyModule/coursepage/coursepage.component';
import { CourseDescriptionComponent } from './MyModule/course-description/course-description.component';
import { CourseplayerComponent } from './MyModule/courseplayer/courseplayer.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path:'course-player',
    component:CourseplayerComponent
  }
  ,
  {
    path: 'courses',
    component: CoursepageComponent,
  },
  {
    path:'admin-dashboard',
    component:AdminDashboardComponent
  },
  {
    path:'user-dashboard',
    component:UserDashboardComponent
  }
  ,
  {
    path: '**',
    component: NotfoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
