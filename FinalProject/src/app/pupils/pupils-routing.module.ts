import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditPupilComponent } from './pupils/edit-pupil/edit-pupil.component';
import { PupilsComponent } from './pupils/pupils.component';


const routes: Routes = [
  { path: 'pupils', component: PupilsComponent },
  { path: 'pupils/:id', component: EditPupilComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PupilsRoutingModule { }
