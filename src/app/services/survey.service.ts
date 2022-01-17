import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Survey} from "../models/survey";
import {Query} from "../models/query";
import {httpConfig, urlApi} from '../global';
import {Result} from '../models/result';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {
  url = urlApi + '/survey';

  constructor(private http: HttpClient) {
  }

  getSurvey(id: number, email: String): Observable<Survey> {
    return this.http.get<Survey>(`${this.url}/${id}/${email}`, httpConfig);
  }

  deleteSurvey(id: number, email: String): Observable<boolean> {
    return this.http.delete<boolean>(`${this.url}/${id}/${email}`, httpConfig);
  }

  setSurvey(name: String, email: String): Observable<Survey> {
    return this.http.post<Survey>(`${this.url}/${name}/${email}`, httpConfig);
  }

  setQueries(id: number, email: string, queryList: Query[]): Observable<Query[]> {
    return this.http.put<Query[]>(`${this.url}/que/${id}/${email}`, queryList, httpConfig);
  }

  getQueries(id: number): Observable<Query[]> {
    return this.http.get<Query[]>(`${this.url}/que/${id}`, httpConfig);
  }

  getResults(id: number, email: String): Observable<Array<Array<Result>>> {
    return this.http.get<Array<Array<Result>>>(`${this.url}/res/${id}/${email}`, httpConfig);
  }

  getAllByEmail(email: string): Observable<Survey[]> {
    return this.http.get<Survey[]>(`${this.url}/${email}`, httpConfig);
  }

  inviteRespondents(id: number, email: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.url}/inv/${id}/${email}`, httpConfig);
  }

  getRespQueries(pId: number, sId: number, email: string): Observable<Query[]> {
    return this.http.get<Query[]>(`${this.url}/resp/${pId}/${email}/${sId}`, httpConfig);
  }

  getCSV(sId: number, email: string): Observable<Blob> {
    return this.http.get(`${this.url}/report/${sId}/${email}`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
        , 'Access-Control-Expose-Headers': 'Authorization'
      }
      , responseType: 'blob'
    });

  }
}
