import {Injectable} from '@angular/core';
import {PersonalData} from "../models/personal-data";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {httpConfig, urlApi} from 'src/app/global';
import {SurveyInfo} from '../models/survey';

@Injectable({
  providedIn: 'root'
})
export class PersonalDataService {
  url = urlApi + '/pd';

  constructor(private http: HttpClient) {
  }

  setPersonalData(personalData: PersonalData): Observable<PersonalData> {
    return this.http.post<PersonalData>(this.url, personalData, httpConfig);
  }

  editPersonalData(personalData: PersonalData): Observable<PersonalData> {
    return this.http.put<PersonalData>(this.url, personalData, httpConfig);
  }

  getPersonalData(id: number): Observable<PersonalData> {
    return this.http.get<PersonalData>(`${this.url}/${id}`, httpConfig);
  }

  getPersonalDataByEmail(email: String): Observable<PersonalData> {
    return this.http.get<PersonalData>(`${this.url}/user/${email}`, httpConfig);
  }

  getSurveys(pId: number, email: string): Observable<SurveyInfo[]> {
    return this.http.get<SurveyInfo[]>(`${this.url}/surveys/${pId}/${email}`, httpConfig);
  }

}
