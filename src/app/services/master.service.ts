import { HttpClient } from '@angular/common/http';
import { DoCheck, Injectable } from '@angular/core';
import { Application } from '../models/application.model';
import { Observable, map, tap } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { apiEndpoints } from '../utilites/api-endpoints.model';
import { APIResponse } from '../models/response.model';

@Injectable({
  providedIn: 'root',
})
export class MasterService implements DoCheck {
  constructor(private http: HttpClient) {}
 
  ngDoCheck(): void {
    console.log("MasterService ",'ngDoCheck triggered!');
  }
  addNewApplication(
    application: Application
  ): Observable<APIResponse<Application[] | null>> {
    debugger;
    return this.http.post<APIResponse<Application[] | null>>(
      `${environment.apiBaseURL}${apiEndpoints.POST.CHECK_APPLICATION_STATUS}`,
      application
    );
  }
}
