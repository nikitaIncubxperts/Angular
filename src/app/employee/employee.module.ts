import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { DepartmentListComponent } from './department-list/department-list.component';


@NgModule({
  declarations: [
    EmployeeListComponent,
    DepartmentListComponent,

  ],
  imports: [
    CommonModule
  ],
  // exports: [
  //   EmployeeListComponent,
  //   DepartmentListComponent
  // ]
})
export class EmployeeModule { }
