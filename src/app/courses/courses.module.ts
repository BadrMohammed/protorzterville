import { NgModule } from '@angular/core';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { SharedModule } from '../shared/shared.module';
import { CourseDetailsComponent } from './components/course-details/course-details.component';

@NgModule({
  declarations: [CoursesListComponent, CourseDetailsComponent],
  imports: [CoursesRoutingModule, SharedModule],
})
export class CoursesModule {}
