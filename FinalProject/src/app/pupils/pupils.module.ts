import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PupilsRoutingModule } from './pupils-routing.module';
import { FormsModule } from '@angular/forms';
import { PupilsComponent } from './pupils/pupils.component';
import { EditPupilComponent } from './pupils/edit-pupil/edit-pupil.component';


@NgModule({
  declarations: [
    PupilsComponent,
    EditPupilComponent
  ],
  imports: [
    CommonModule,
    PupilsRoutingModule,
    FormsModule
  ]
})
export class PupilsModule { }
