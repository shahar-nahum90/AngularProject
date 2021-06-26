import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Employees } from './dummy-data-employees';
import employees from './Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor() { }

  public getEmployees(): Observable<employees[]> {
    return of (Employees)
  }

  public getDetailsPupil(id: string | null): Observable<employees | undefined> {
    for (const employee of Employees) {
      if (employee.id === id) {
        return of(employee);
      }
    }
    return of(undefined);
  }
}
