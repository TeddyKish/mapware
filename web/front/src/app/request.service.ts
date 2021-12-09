import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { networks } from './components/generic-list/generic-list.component';

@Injectable({
  providedIn: 'root'
})
export class RequestService {


  constructor(private http: HttpClient) { }

  public getData() {
    const headers = new HttpHeaders()
          .append('Content-Type', 'application/json')
          .append('Access-Control-Allow-Headers', 'Content-Type')
          .append('Access-Control-Allow-Methods', 'GET')
          .append('Access-Control-Allow-Origin', 'http://localhost:5000');
    return this.http.get<networks[]>("http://localhost:5000/db", {headers});
  }

  public getPhoto() {
      const headers = new HttpHeaders()
                .append('Content-Type', 'application/json')
                .append('Access-Control-Allow-Headers', 'Content-Type')
                .append('Access-Control-Allow-Methods', 'GET')
                .append('Access-Control-Allow-Origin', 'http://localhost:5000');
      return this.http.get<string>("http://localhost:5000/photo", {headers});
  }

  public getNetworks() {
    const headers = new HttpHeaders()
                    .append('Content-Type', 'application/json')
                    .append('Access-Control-Allow-Headers', 'Content-Type')
                    .append('Access-Control-Allow-Methods', 'GET')
                    .append('Access-Control-Allow-Origin', 'http://localhost:5000');
    //return this.http.get<string[]>("http://localhost:5000/networks", {headers});
    return ["n1", "n2", "n3"];
  }

}
