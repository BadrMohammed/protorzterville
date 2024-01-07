import { NgModule } from '@angular/core';

import { DepartmentsRoutingModule } from './departments-routing.module';
import { DepartmentsListComponent } from './components/departments-list/departments-list.component';
import { SharedModule } from '../shared/shared.module';
import { DepartmentDetailsComponent } from './components/department-details/department-details.component';

@NgModule({
  declarations: [DepartmentsListComponent, DepartmentDetailsComponent],
  imports: [DepartmentsRoutingModule, SharedModule],
})
export class DepartmentsModule {}
