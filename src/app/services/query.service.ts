import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Query} from "../models/query";
import {httpConfig, urlApi} from '../global';

@Injectable({
  providedIn: 'root'
})
export class QueryService {
  url = urlApi + '/que';

  constructor(private http: HttpClient) {
  }

  set(query: Query): Observable<Query> {
    return this.http.post<Query>(this.url, query, httpConfig);
  }

  get(id: number): Observable<Query> {
    return this.http.get<Query>(`${this.url}/${id}`, httpConfig);
  }

  delete(id: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.url}/${id}`, httpConfig);
  }
}
