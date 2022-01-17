import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SurveyService} from 'src/app/services/survey.service';
import {Query} from 'src/app/models/query'
import {GraficoModel} from "src/app/models/grafico.modele";

@Component({
  selector: 'app-analyze-screen',
  templateUrl: './analyze-screen.component.html',
  styleUrls: ['./analyze-screen.component.css']
})
export class AnalyzeScreenComponent implements OnInit {


  id: number
  email: string

  queryList: Query[];
  resultList: Array<Array<GraficoModel>> = [];
  numberOfRespondents: number = 0;

  constructor(private props: ActivatedRoute, public router: Router,
              private service: SurveyService) {
    // @ts-ignore
    this.id = this.props.snapshot.paramMap.get('id');
    // @ts-ignore
    this.email = localStorage.getItem('email');
  }

  ngOnInit(): void {
    this.getRes();
    this.getQuery();
  }

  getRes() {
    this.service.getResults(this.id, this.email).subscribe(value => {
        console.log(value);

        this.resultList = value.map(x => x.map(element => ({
          value: element.value,
          color: this.getRandomColor(),
          size: '',
          legend: element.name
        })));
        console.log(this.resultList);

        this.resultList[0].forEach(element => {
          this.numberOfRespondents += element.value;
        })

      }, (err) => {
        alert('Error');
      }
    );
  }

  getCSV() {
    let email = localStorage.getItem('email');

    // @ts-ignore
    this.service.getCSV(this.id, email).subscribe(value => {
        const blob = new Blob([value], {type: 'text/csv'});
        const downloadURL = URL.createObjectURL(blob);
        window.open(downloadURL);

      }, (err) => {
        alert('Error');
      }
    );
  }

  getQuery(): void {
    this.service.getQueries(this.id).subscribe(value => {
        this.queryList = value;
      }, (err) => {
        alert('Error');
      }
    );
  }

  toAscii(value: number): string {
    return String.fromCharCode(65 + value);
  }

  getRandomColor(): string {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}

