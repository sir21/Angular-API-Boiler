import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalApiService {
  baseUrl = ''

  constructor(private httpClient: HttpClient) { }

  get(uri: string): Observable<any> {
    return this.httpClient.get(this.baseUrl + uri);
  }

  delete(uri: string): Observable<any> {
    return this.httpClient.delete(this.baseUrl + uri);
  }

  post(uri: string, data: any): Observable<any> {
    return this.httpClient.post(this.baseUrl + uri, data);
  }

  put(uri: string, data: any): Observable<any> {
    return this.httpClient.put(this.baseUrl + uri, data);
  }

}
