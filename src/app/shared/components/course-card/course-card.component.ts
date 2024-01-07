import { Component, Input } from '@angular/core';
import { ICourses } from 'src/app/courses/models/ICourses.model';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss'],
})
export class CourseCardComponent {
  @Input() course: ICourses | any = {};
  @Input() customCardClassName?: string = '';
  @Input() labelPosition?: number = 1;
  @Input() imageContainerClassName?: string = '';
  @Input() textContainerClassName?: string = '';
  @Input() disableImageHover?: boolean = false;
  @Input() handleRead?: any;
}
