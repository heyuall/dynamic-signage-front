import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MonitorService {
  private baseUrl = 'http://localhost:8080/api/Afficheur/';
  private url = 'http://localhost:8080/api/';

  public eventEmitter: EventEmitter<any> = new EventEmitter();

  constructor(private http: HttpClient) {
  }
  send(param) {
    this.eventEmitter.emit(param);
  }

  getMonitorList(): Observable<any> {


    return this.http.get(`${this.baseUrl}` + 'all');
  }


  affectLayout(monitorId, layoutId) {
    return this.http
      .post(`${this.url}` + 'Afficheur/' + `${monitorId}` + '/affectLayoutGrid/' + layoutId, {});
  }
  addMonitor(Monitor) {
    return this.http.post(`${this.url}` + 'Afficheur/add',
      {
        "name": Monitor.name,
        "afficheurReference": Monitor.afficheurReference,
      })
  }

  updateMonitor(Monitor, id) {
    return this.http.post(`${this.url}` + 'Afficheur/add',
      {
        "id": id,
        "name": Monitor.name,
        "afficheurReference": Monitor.afficheurReference,
      })
  }

  deleteMonitor(id) {
    return this.http.delete(`${this.url}` + 'Afficheur/' + id);
  }

  ////////////////////////////////////

  getLayoutList() {
    return this.http.get(`${this.url}` + 'LayoutGrid/all');
  }

  addLayout(LayoutGrid) {
    return this.http.post(`${this.url}` + 'LayoutGrid/add',
      {
        "name": LayoutGrid.name,
        "main_dimension": LayoutGrid.main_dimension,
        "footer": LayoutGrid.footer,
        "aside": LayoutGrid.aside,
      })
  }

  updateLayout(LayoutGrid, id) {
    return this.http.post(`${this.url}` + 'LayoutGrid/add',
      {
        "id": id,
        "name": LayoutGrid.name,
        "main_dimension": LayoutGrid.main_dimension,
        "footer": LayoutGrid.footer,
        "aside": LayoutGrid.aside,
     })
  }

  deleteLayout(id) {
    return this.http.delete(`${this.url}` + 'LayoutGrid/remove/' + id);
  }

}
