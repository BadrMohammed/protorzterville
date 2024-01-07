import { Component, OnDestroy, OnInit } from '@angular/core';
import { DepartmentsService } from '../../services/departments.service';
import {
  IDepartment,
  IDepartments,
} from '../../../departments/models/IDepartments';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-departments-list',
  templateUrl: './departments-list.component.html',
  styleUrls: ['./departments-list.component.scss'],
})
export class DepartmentsListComponent implements OnInit, OnDestroy {
  data!: IDepartments;
  departments: IDepartment[] = [
    { id: '1', title: 'Frontend2', courses_count: 233 },
    { id: '2', title: 'Backend2', courses_count: 233 },
    { id: '3', title: 'Quality2', courses_count: 233 },
    { id: '4', title: 'Presales2', courses_count: 233 },
    { id: '5', title: 'UX2', courses_count: 233 },
    { id: '6', title: 'Testing', courses_count: 233 },
    { id: '7', title: 'DevOps', courses_count: 233 },
    { id: '8', title: 'Graphic', courses_count: 233 },
  ];
  hasError: boolean = false;
  subscription!: Subscription;
  constructor(private _departmentService: DepartmentsService) {}
  ngOnInit(): void {
    // this.getDepartments();
  }
  getDepartments() {
    this.subscription = this._departmentService.getDepartments().subscribe({
      next: (response: any) => {
        if (response?.status) {
          this.data = response.result;
          this.departments = response.result.items;
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
