import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ComponentsComponent } from '../pages/components/components/components.component';

@Injectable({
  providedIn: 'root'
})
export class ComponentDataService {
  private baseUrl = 'http://localhost:8080/api/Component/';

  constructor(private http: HttpClient) { }

  initComponentList() {
    return this.http.post(`${this.baseUrl}` + 'create', {});
  }

  getComponentList(): Observable<any> {


    return this.http.get(`${this.baseUrl}` + 'all');
  }




}
