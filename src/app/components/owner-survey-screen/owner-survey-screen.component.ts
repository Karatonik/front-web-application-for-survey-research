import {Component, OnInit, Output} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {Router} from '@angular/router';
import {Survey} from 'src/app/models/survey';
import {SurveyFilterService} from 'src/app/services/survey-filter.service';
import {SurveyService} from 'src/app/services/survey.service';

@Component({
  selector: 'app-owner-survey-screen',
  templateUrl: './owner-survey-screen.component.html',
  styleUrls: ['./owner-survey-screen.component.css']
})
export class OwnerSurveyScreenComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'Action'];

  dataSource: MatTableDataSource<Survey>;

  @Output() surveyRow: Survey;
  id = -1;

  constructor(private service: SurveyService, private filterService: SurveyFilterService, public router: Router) {
  }

  ngOnInit(): void {

    if (localStorage.getItem('accountType') == 'consumer') {
      this.router.navigate(['home']);
    }

    this.getAllData();
    this.dataSource.filterPredicate = function (data, filter: string): boolean {
      return data.name.toLowerCase().includes(filter);
    };
  }

  applyFilter(filterValue: string): void {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  onRowClick(row: Survey): void {
    this.surveyRow = row;
    this.id = this.surveyRow.id;
  }

  createSurvey(): void {
    this.router.navigate(['cs']);
  }

  analyzeSurvey(element: any) {
    this.router.navigate(['an/' + element.id]);
  }

  filterSurvey(element: any) {
    let email = localStorage.getItem('email');
    // @ts-ignore
    this.filterService.getSurveyFilter(element.id, email).subscribe(value => {

        if (value.id != null) {
          localStorage.setItem('edit', 'true');
          this.router.navigate([`cf/${element.id}`]);
        }
      }, (err) => {
        alert("wrong credentials!!!")
      }
    )
  }

  deleteSurvey(element: any) {
    let email = localStorage.getItem('email');

    // @ts-ignore
    this.service.delete(element.id, email).subscribe(value => {
      if (value) {
        window.location.reload();
      } else {
        alert("Error");
      }
    })

  }

  getAllData(): void {
    let email = localStorage.getItem('email');
    // @ts-ignore
    this.service.getAllByEmail(email).subscribe(value => {

        this.dataSource = new MatTableDataSource<Survey>(value);
      }, (err) => {
        alert("wrong credentials!!!")
      }
    );
  }

}
