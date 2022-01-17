import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonalDataService } from 'src/app/services/personal-data.service';
import {httpConfig} from 'src/app/global'
import { SurveyInfo } from 'src/app/models/survey';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})
export class HomeScreenComponent implements OnInit {
  pId: number;
 showPersonalData: boolean = false;
 showCheck:boolean =true;
 showInfo:boolean =false;
 surveyList : SurveyInfo[];
  constructor(public router: Router, private service: PersonalDataService) { }

  ngOnInit(): void {
    if('Bearer ' + localStorage.getItem('token')!== httpConfig.headers.Authorization){
      window.location.reload();
    }
  }


  personalDataMaker() {
    this.router.navigate(['person']);
  }

  check() {
    let email = localStorage.getItem('email');
    // @ts-ignore
    this.service.getByEmail(email).subscribe(value => {
        if(value.id ==null){
          this.showPersonalData =true;
        }else{
          this.pId = value.id;
          this.showInfo=true;
          // @ts-ignore
          this.service.getSurveys(value.id,email).subscribe(value =>{
            this.surveyList = value;
            console.log(value);
          }, (err) => {
              alert("Error")
            }
          );
        }
      this.showCheck =false;
      }, (err) => {
        alert("no login")
      }
    );
  }

  start(id:number) {
    // @ts-ignore
    localStorage.setItem('pId',this.pId);
    this.router.navigate([`/r/${id}`]);
  }
}
