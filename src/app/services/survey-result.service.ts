import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {SurveyResult} from "../models/survey-result";
import { urlApi, httpConfig } from '../global';

@Injectable({
  providedIn: 'root'
})
export class SurveyResultService {
  url =urlApi + '/res';

  constructor(private http: HttpClient) {
  }

  get(id: number): Observable<SurveyResult> {
    return this.http.get<SurveyResult>(`${this.url}/${id}`,httpConfig);
  }

  set(sId: number, result: SurveyResult): Observable<SurveyResult> {
    return this.http.post<SurveyResult>(`${this.url}/${sId}`, result,httpConfig);
  }
  delete(id: number): Observable<boolean> {
    return this.http.post<boolean>(`${this.url}/${id}`,httpConfig);
  }
}
