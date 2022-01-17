import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PersonalData} from "../models/personal-data";
import {Observable} from "rxjs";
import {Survey} from "../models/survey";
import { urlApi, httpConfig } from '../global';
import { Award, UserInfo } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = urlApi + '/user';
  constructor(private http: HttpClient) { }

  getUserSurvey(email: String): Observable<Survey[]> {
    return this.http.get<Survey[]>(`${this.url}/${email}`,httpConfig);
  }
  getPoints(email: string): Observable<number> {
    return this.http.get<number>(`${this.url}/points/${email}`,httpConfig);
  }
  getUserAwards(email: string): Observable<Award[]> {
    return this.http.get<Award[]>(`${this.url}/awards/${email}`,httpConfig);
  }

  getAllUsers(adminEmail: string): Observable<UserInfo[]> {
    return this.http.get<UserInfo[]>(`${this.url}/admin/${adminEmail}`,httpConfig);
  }
  increasePermissionsForUser(adminEmail: string, userEmail: string): Observable<boolean> {
    return this.http.put<boolean>(`${this.url}/increase/${adminEmail}/${userEmail}`,httpConfig);
  }
  reducePermissionsForUser(adminEmail: string, userEmail: string): Observable<boolean> {
    return this.http.put<boolean>(`${this.url}/reduce/${adminEmail}/${userEmail}`,httpConfig);
  }
}
