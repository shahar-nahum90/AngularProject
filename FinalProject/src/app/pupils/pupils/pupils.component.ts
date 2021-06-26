import { Component, OnInit } from '@angular/core';
import Pupil from '../Pupil';
import { PupilsService } from '../pupils.service';

@Component({
  selector: 'app-pupils',
  templateUrl: './pupils.component.html',
  styleUrls: ['./pupils.component.css']
})
export class PupilsComponent implements OnInit {

  public pupilsArr: Pupil[] = [];

  constructor(private pupilsService: PupilsService) { }

  ngOnInit(): void {
    this.pupilsService.getPupils().subscribe(pupils => this.pupilsArr = pupils);
  }

}
