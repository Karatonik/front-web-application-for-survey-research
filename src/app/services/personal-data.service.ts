import { Injectable } from '@angular/core';
import {PersonalData} from "../models/personal-data";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { urlApi ,httpConfig} from 'src/app/global';
import { SurveyInfo } from '../models/survey';

@Injectable({
  providedIn: 'root'
})
export class PersonalDataService {
  url = urlApi+ '/pd';

  constructor(private http: HttpClient) { }

  set(personalData: PersonalData): Observable<PersonalData> {
    return this.http.post<PersonalData>(this.url, personalData,httpConfig);
  }
  edit(personalData: PersonalData): Observable<PersonalData> {
    return this.http.put<PersonalData>(this.url, personalData,httpConfig);
  }
  get(id: number): Observable<PersonalData> {
    return this.http.get<PersonalData>(`${this.url}/${id}`,httpConfig);
  }
  getByEmail(email: String): Observable<PersonalData> {
    return this.http.get<PersonalData>(`${this.url}/e/${email}`,httpConfig);
  }
  getSurveys(pId: number, email:string): Observable<SurveyInfo[]>{
    return this.http.get<SurveyInfo[]>(`${this.url}/s/${pId}/${email}`,httpConfig);
  }

}
