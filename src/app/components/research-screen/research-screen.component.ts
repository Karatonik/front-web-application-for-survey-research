import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SurveyService} from 'src/app/services/survey.service';
import {Query} from 'src/app/models/query'
import {RemoveElementFromStringArray} from 'src/app/global';
import {SurveyResult} from 'src/app/models/survey-result';
import {SurveyResultService} from 'src/app/services/survey-result.service';
import {UserService} from 'src/app/services/user.service';

@Component({
  selector: 'app-research-screen',
  templateUrl: './research-screen.component.html',
  styleUrls: ['./research-screen.component.css']
})
export class ResearchScreenComponent implements OnInit {
  queryList: Query[];
  result: SurveyResult = {
    id: 0,
    responses: [],
    userEmail: ''
  };
  queryIterator: number = 0;
  query: Query;
  lenghtResearch: number;
  progressBarValue = 0;
  answers: string[] = [];
  sId: number;
  openQuery = false;
  openQueryValue = "";


  constructor(public router: Router, private props: ActivatedRoute, private surveyService: SurveyService
    , private service: SurveyResultService, private userService: UserService) {
  }

  ngOnInit(): void {
    // @ts-ignore
    this.sId = this.props.snapshot.paramMap.get('id');
    let pId = localStorage.getItem('pId');
    let email = localStorage.getItem('email');
    localStorage.removeItem('pid');
    // @ts-ignore
    this.result.userEmail = email;


    if (pId != null) {
      // @ts-ignore
      this.surveyService.getRespQueries(pId, this.sId, email).subscribe(value => {
          if (value != this.queryList) {
            this.queryList = value;
            this.lenghtResearch = this.queryList.length;
            this.query = this.queryList[0];
            if (!this.query.checkQuery && this.query.correctAnswer == 1) {
              this.openQuery = true;
            }
          } else {
            alert('Error');
            this.router.navigate(['home']);
          }
        }
      );
    } else {
      alert('Error');
      this.router.navigate(['home']);
    }

  }

  next() {
    if (this.openQuery) {
      this.result.responses[this.queryIterator] = this.openQueryValue;
      this.openQueryValue = "";

    } else {
      for (let x of this.query.answers) {
        if (this.answers.includes(x)) {
          if (this.result.responses[this.queryIterator] === undefined) {
            this.result.responses[this.queryIterator] = '';
          }
          this.result.responses[this.queryIterator] = this.result.responses[this.queryIterator] + String
            .fromCharCode(65 + this.query.answers.indexOf(x));
        }
      }
    }
    this.answers = [];
    this.queryIterator++;
    this.progressBarValue = (this.queryIterator / this.lenghtResearch) * 100;
    if (this.queryIterator == this.lenghtResearch) {
      this.service.setSurveyResult(this.sId, this.result).subscribe(value => {
        alert("Good Job");
        let email = localStorage.getItem('email');
        // @ts-ignore
        this.userService.getPoints(email).subscribe(value => {
          localStorage.setItem('points', value.toString())
        })
        this.router.navigate(['home']);
      }, (err) => {
        alert('Error')
      });
    } else {
      this.query = this.queryList[this.queryIterator];

      if (!(this.query.checkQuery) && (this.query.correctAnswer == 1)) {
        this.openQuery = true;
      } else {
        this.openQuery = false;
      }
    }
  }

  editList(list: string[], value: string): string[] {
    if (list.includes(value)) {
      list = RemoveElementFromStringArray(list, value);
    } else {
      if (list.length < this.query.maxAnswer) {
        list.push(value);
      }
    }
    return list;
  }

  previous() {
    if (this.queryIterator > 0) {
      this.queryIterator--;
      this.progressBarValue = (this.queryIterator / this.lenghtResearch) * 100;
      this.query = this.queryList[this.queryIterator];
      if (!this.query.checkQuery && this.query.correctAnswer == 1) {
        this.openQuery = true;
      } else {
        this.openQuery = false;
      }
    }
  }
}
