import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {LoginResult} from "../models/login-result";
import {Login} from "../models/login";
import {httpConfig, urlApi} from "../global"

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = urlApi + '/auth';

  constructor(public http: HttpClient) {
  }

  login(login: Login): Observable<LoginResult> {
    httpConfig.headers.Authorization = 'Bearer ' + localStorage.getItem('token');
    return this.http.post<LoginResult>(`${this.url}/login`, login);
  }

  register(login: Login): Observable<{}> {
    return this.http.post<{}>(`${this.url}/reg`, login);
  }

  sendKeyToChangePassword(email: string): Observable<{}> {
    return this.http.put(`${this.url}/sk`, email);
  }

  confirmation(key: string): Observable<boolean> {
    return this.http.post<boolean>(this.url, key);
  }

  deleteWithKey(key: string): Observable<boolean> {
    // @ts-ignore
    return this.http.delete<boolean>(this.url, key);
  }

  changePassword(key: String, nPass: String): Observable<boolean> {
    return this.http.put<boolean>(`${this.url}/${key}/${nPass}`, null);
  }

}
