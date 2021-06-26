import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, of } from 'rxjs';
import teacher from '../Teacher';
import { TeacherService } from '../teacher.service';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-edit-teacher',
  templateUrl: './edit-teacher.component.html',
  styleUrls: ['./edit-teacher.component.css']
})
export class EditTeacherComponent implements OnInit {

  id: string | null = "";
  teacher: Observable<teacher | undefined> = of(undefined);
  constructor(private service: TeacherService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.teacher = this.route.paramMap.pipe(switchMap((p:ParamMap) => this.service.getDetails(p.get("id"))))
  }

}
