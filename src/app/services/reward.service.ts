import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import { urlApi, httpConfig } from '../global';
import { Reward } from '../models/login';
@Injectable({
  providedIn: 'root'
})
export class RewardService {
  url = urlApi + '/rew';
  constructor(private http: HttpClient) { }


  setReward(reward: Reward): Observable<Reward> {
    return this.http.post<Reward>(`${this.url}`,reward,httpConfig);
  }
  getRewardForUser(name: string, email: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.url}/${name}/${email}`,httpConfig);
  }
  getAllRewards(): Observable<Reward[]> {
    return this.http.get<Reward[]>(`${this.url}`,httpConfig);
  }
  deleteReward(name: string): Observable<boolean> {
    return  this.http.delete<boolean>(`${this.url}/${name}`,httpConfig);
  }
}
