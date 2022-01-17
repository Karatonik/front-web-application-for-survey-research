import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {SurveyFilter} from "../models/survey-filter";
import {httpConfig, urlApi} from '../global';

@Injectable({
  providedIn: 'root'
})
export class SurveyFilterService {
  url = urlApi + '/fil';


  constructor(private http: HttpClient) {
  }

  setSurveyFilter(filter: SurveyFilter): Observable<SurveyFilter> {
    return this.http.post<SurveyFilter>(this.url, filter, httpConfig);
  }

  editSurveyFilter(filter: SurveyFilter): Observable<SurveyFilter> {
    return this.http.put<SurveyFilter>(this.url, filter, httpConfig);
  }

  deleteSurveyFilter(id: number, email: String): Observable<boolean> {
    return this.http.delete<boolean>(`${this.url}/${id}/${email}`, httpConfig);
  }

  addSurveyToFilter(sId: number, fId: number): Observable<boolean> {
    return this.http.put<boolean>(`${this.url}/${sId}/${fId}`, httpConfig);
  }

  getSurveyFilter(sId: number, email: string): Observable<SurveyFilter> {
    return this.http.get<SurveyFilter>(`${this.url}/${sId}/${email}`, httpConfig);
  }

}
