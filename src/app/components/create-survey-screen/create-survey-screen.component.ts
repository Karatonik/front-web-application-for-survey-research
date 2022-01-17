import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SurveyService } from 'src/app/services/survey.service';

@Component({
  selector: 'app-create-survey-screen',
  templateUrl: './create-survey-screen.component.html',
  styleUrls: ['./create-survey-screen.component.css']
})
export class CreateSurveyScreenComponent implements OnInit {
  name: string = "";
  email: string = "";
  constructor(public router: Router,public service: SurveyService) { }

  ngOnInit(): void {
  }

  next() {
    // @ts-ignore
    this.email = localStorage.getItem('email');
    this.service.set(this.name ,this.email).subscribe(value => {
      if(value.id !==null){
        localStorage.setItem('edit','false');
        this.router.navigate([`cf/${value.id}`]);
      }else{
        alert("error");
      }

      }, (err) => {
        alert("wrong credentials!!!")
      }
    );


  }
}
