import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ICourses } from '../../../courses/models/ICourses.model';
import { CourseService } from '../../../courses/services/course.service';

@Component({
  selector: 'app-recommended-courses',
  templateUrl: './recommended-courses.component.html',
  styleUrls: ['./recommended-courses.component.scss'],
})
export class RecommendedCoursesComponent {
  data: ICourses[] = [];
  hasError: boolean = false;
  subscription!: Subscription;

  constructor(private _courseService: CourseService) {}

  ngOnInit(): void {
    this.getRecommendedCourse();
  }
  getRecommendedCourse() {
    this.subscription = this._courseService.getLatestCourse().subscribe({
      next: (response: any) => {
        if (response?.status) {
          this.data = response.result;
          this.hasError = false;
        }
      },
      error: (err) => {
        this.hasError = true;
      },
    });
  }
  ngOnDestroy(): void {
    this?.subscription?.unsubscribe();
  }
}
