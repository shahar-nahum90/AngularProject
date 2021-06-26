import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import Pupil from './Pupil';
import { pupils } from './dummy-data-pupils';

@Injectable({
  providedIn: 'root'
})
export class PupilsService {

  constructor() { }

  public getPupils(): Observable<Pupil[]> {
    return of (pupils)
  }

  public getDetailsPupil(id: string | null): Observable<Pupil | undefined> {
    for (const pupil of pupils) {
      if (pupil.id === id) {
        return of(pupil);
      }
    }
    return of(undefined);
  }
}
