import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentsListComponent } from './components/departments-list/departments-list.component';
import { DepartmentDetailsComponent } from './components/department-details/department-details.component';

const routes: Routes = [
  { path: '', component: DepartmentsListComponent },
  { path: ':title', component: DepartmentDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DepartmentsRoutingModule {}
