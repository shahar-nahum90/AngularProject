import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import pupil from '../../Pupil';
import { PupilsService } from '../../pupils.service';

@Component({
  selector: 'app-edit-pupil',
  templateUrl: './edit-pupil.component.html',
  styleUrls: ['./edit-pupil.component.css']
})
export class EditPupilComponent implements OnInit {

  id: string | null = "";
  pupils: Observable<pupil | undefined> = of(undefined);
  constructor(private service: PupilsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.pupils = this.route.paramMap.pipe(switchMap((p:ParamMap) => this.service.getDetailsPupil(p.get("id"))))
  }

}
