import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ICourses } from 'src/app/courses/models/ICourses.model';
import { CourseService } from 'src/app/courses/services/course.service';
import { scrollToTarget } from 'src/utils/scroll-to-target';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.scss'],
})
export class DepartmentDetailsComponent {
  subscription!: Subscription;
  subscriptionDetails!: Subscription;
  hasError: boolean = false;
  data: ICourses[] = [];
  selectItem!: ICourses;

  constructor(private _courseService: CourseService) {}

  ngOnInit(): void {
    this.getCourses();
    this.getCourse(4907);
  }

  getCourses() {
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

  getCourse(id: any) {
    this.subscriptionDetails = this._courseService
      .getCourseDetails(id)
      .subscribe({
        next: (response: any) => {
          if (response?.status) {
            this.selectItem = response?.result;
            this.hasError = false;
          }
        },
        error: (err) => {
          this.hasError = true;
        },
      });
  }

  onRedMore = (course: ICourses) => {
    this.getCourse(course.id);
    scrollToTarget('selected-course');
  };

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
    this?.subscriptionDetails?.unsubscribe();
  }
}
