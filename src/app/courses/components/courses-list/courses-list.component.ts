import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ICourses } from '../../models/ICourses.model';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
})
export class CoursesListComponent implements OnInit, OnDestroy {
  subscription!: Subscription;
  hasError: boolean = false;
  data: ICourses[] = [];

  constructor(private _courseService: CourseService) {}

  ngOnInit(): void {
    this.getCourses();
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

  ngOnDestroy(): void {
    this?.subscription?.unsubscribe();
  }
}
