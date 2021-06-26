import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PupilsModule } from './pupils/pupils.module';
import { AppRoutingModule } from './app-routing.module';
import { TeacherModule } from './teacher/teacher.module';
import { EmployeesModule } from './employees/employees.module';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    PupilsModule,
    TeacherModule,
    EmployeesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
