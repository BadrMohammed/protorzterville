import { Component, OnDestroy, OnInit } from '@angular/core';
import { CourseService } from '../../../courses/services/course.service';
import { Subscription } from 'rxjs';
import { ICourses } from '../../../courses/models/ICourses.model';

@Component({
  selector: 'app-latest-courses',
  templateUrl: './latest-courses.component.html',
  styleUrls: ['./latest-courses.component.scss'],
})
export class LatestCoursesComponent implements OnInit, OnDestroy {
  data: ICourses[] = [
    {
      id: 1,
      rate: { rates_count: 2, rates_score: 2 },
      brief: 'Luxor temple,Karnak Temple,Mummification Museum,Balloon flights',
      title: 'day trip',
      category: { category_id: '1', category_name: 'Luxor' },
      image_url: '../../../../assets/Fe-kit/images/governorates/luxor.jpg',
      date: '',
      start_date: '15-1-2024',
      end_date: '20-1-24',
      instructors: [
        { id: 1, name: '', about: '', image_url: '', job_title: '' },
      ],
    },
    {
      id: 1,
      rate: { rates_count: 2, rates_score: 2 },
      brief: 'Abu Simbel Temple,Shopping,Felucca,Sound and Light Show ',
      title: 'day trip',
      category: { category_id: '2', category_name: 'Aswan' },
      image_url: '../../../../assets/Fe-kit/images/governorates/Aswan.jpg',
      date: '',
      start_date: '15-1-2024',
      end_date: '20-1-24',
      instructors: [
        { id: 1, name: '', about: '', image_url: '', job_title: '' },
      ],
    },
    {
      id: 1,
      rate: { rates_count: 2, rates_score: 2 },
      brief:
        'King Tutankhamun Museum,Naama bay,Ras Mohammed Reserve,Blue hole,Sunken ship',
      title: 'day trip',
      category: { category_id: '', category_name: 'Sharm el Sheikh' },
      image_url: '../../../../assets/Fe-kit/images/governorates/sharm.jpg',
      date: '',
      start_date: '15-1-2024',

      end_date: '20-1-24',
      instructors: [
        { id: 1, name: '', about: '', image_url: '', job_title: '' },
      ],
    },
  ];
  hasError: boolean = false;
  subscription!: Subscription;

  constructor(private _courseService: CourseService) {}

  ngOnInit(): void {
    // this.getLatestCourse();
  }
  getLatestCourse() {
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
    // this?.subscription?.unsubscribe();
  }
}
