import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { DepartmentsComponent } from './components/departments/departments.component';
import { InternshipComponent } from './components/internship/internship.component';
import { LatestCoursesComponent } from './components/latest-courses/latest-courses.component';
import { RecommendedCoursesComponent } from './components/recommended-courses/recommended-courses.component';
import { LatestNewsComponent } from './components/latest-news/latest-news.component';

@NgModule({
  declarations: [
    HomeComponent,
    DepartmentsComponent,
    InternshipComponent,
    LatestCoursesComponent,
    RecommendedCoursesComponent,
    LatestNewsComponent,
  ],
  imports: [HomeRoutingModule, SharedModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeModule {}
