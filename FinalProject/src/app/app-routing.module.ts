import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employees/employees/employees.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PupilsComponent } from './pupils/pupils/pupils.component';
import { TeacherComponent } from './teacher/teacher/teacher.component';

const appRoutes: Routes = [
  { path: 'home', component: HomepageComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: 'pupils', component: PupilsComponent },
  { path: 'teachers', component: TeacherComponent } 
]


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
