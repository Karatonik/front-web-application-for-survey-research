import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Query} from 'src/app/models/query'
import {SurveyService} from 'src/app/services/survey.service';

@Component({
  selector: 'app-create-query-screen',
  templateUrl: './create-query-screen.component.html',
  styleUrls: ['./create-query-screen.component.css']
})
export class CreateQueryScreenComponent implements OnInit {
  id: number;
  email: string = "";
  queryList: Query[] = [];
  openQuery: boolean = false;


  tempQuery: Query = {
    id: 0,
    question: "",
    answers: [],
    numberOfQuery: 0,
    checkQuery: false,
    correctAnswer: 0,
    maxAnswer: 1,
  }
  newAnswer: string = "";


  constructor(public router: Router, private props: ActivatedRoute, private service: SurveyService) {
    // @ts-ignore
    this.id = this.props.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
  }

  next() {

    if (this.tempQuery.numberOfQuery + 1 != this.queryList.length) {
      this.queryList[this.tempQuery.numberOfQuery] = this.tempQuery;
    } else {
      this.queryList.push(this.tempQuery);
    }
    this.openQuery = false;

    this.tempQuery = {
      id: 0,
      question: "",
      answers: [],
      numberOfQuery: this.tempQuery.numberOfQuery + 1,
      checkQuery: false,
      correctAnswer: 0,
      maxAnswer: 1,
    }
    this.newAnswer = "";
  }

  createOpenQuery() {
    this.openQuery = true;
    // @ts-ignore
    this.tempQuery = {
      id: 0,
      checkQuery: false,
      correctAnswer: 1,
      answers: [],
      numberOfQuery: this.tempQuery.numberOfQuery,
      maxAnswer: 1,
    }
  }

  finish() {
    if (this.tempQuery.numberOfQuery + 1 != this.queryList.length) {
      this.queryList[this.tempQuery.numberOfQuery] = this.tempQuery;
    } else {
      this.queryList.push(this.tempQuery);
    }
    // @ts-ignore
    this.email = localStorage.getItem('email');
    this.service.setQueries(this.id, this.email, this.queryList).subscribe(value => {
        console.log(value);
        if (value == []) {
          alert("Error")
        } else {
          this.service.inviteRespondents(this.id, this.email).subscribe(value => {
              if (value) {
                alert("Congratulation, succesfully create a new survey")
                this.router.navigate(['home']);
              } else {
                alert("error")
              }

            }, (err) => {
              alert("wrong credentials!!!")
            }
          );
          this.router.navigate([`inv/${this.id}`]);
        }
      }, (err) => {
        alert("wrong credentials!!!")
      }
    );
  }

  previous() {
    if (this.tempQuery.numberOfQuery > 0) {
      this.tempQuery = this.queryList[this.tempQuery.numberOfQuery - 1]
      this.tempQuery.correctAnswer = 0;
    }
  }

  addAnswer() {
    console.log(this.newAnswer);
    this.tempQuery.answers.push(this.newAnswer);
  }

  setCorrectAnswer(value: string) {
    this.tempQuery.correctAnswer = this.tempQuery.answers.indexOf(value);
  }

  toAscii(value: number): string {
    return String.fromCharCode(65 + value);
  }
}
