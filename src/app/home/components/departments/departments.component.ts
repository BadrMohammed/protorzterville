import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  IDepartment,
  IDepartments,
} from '../../../departments/models/IDepartments';
import { Subscription } from 'rxjs';
import { DepartmentsService } from '../../../departments/services/departments.service';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss'],
})
export class DepartmentsComponent implements OnInit, OnDestroy {
  constructor(private _departmentService: DepartmentsService) {}
  data!: IDepartments;
  hasError: boolean = false;
  subscription!: Subscription;
  dataOne: IDepartment[] = [
    {
      id: 1,
      title: 'Luxor',
    },
    {
      id: 2,
      title: 'Aswan',
    },
  ];
  dataTwo: IDepartment[] = [
    {
      id: 3,
      title: 'Hurghada',
    },
    {
      id: 4,
      title: 'Safaga',
    },
  ];
  dataThree: IDepartment[] = [{ id: 5, title: 'Sharm-el-Sheikh' }];

  departments: any = {
    title: 'Determine your tourist destination with us',
    description: 'The best tourist places in Egypt. We offer the best prices',
  };

  ngOnInit(): void {
    // this.getDepartments();
  }
  getDepartments() {
    this.subscription = this._departmentService.getDepartments().subscribe({
      next: (response: any) => {
        if (response?.status) {
          this.data = response.result;

          let reverseItems = response.result.items;
          this.dataOne = reverseItems.filter(
            (t: any) =>
              t.title.includes('Quality') || t.title.includes('Presales')
          );

          this.dataTwo = reverseItems.filter(
            (t: any) => t.title.includes('Frontend') || t.title.includes('UX')
          );
          this.dataThree = reverseItems.filter((t: any) =>
            t.title.includes('Backend')
          );
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
