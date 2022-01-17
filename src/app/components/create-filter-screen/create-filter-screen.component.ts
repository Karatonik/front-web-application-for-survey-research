import {Component, OnInit} from '@angular/core';
import {MatSliderChange} from '@angular/material/slider';
import {ActivatedRoute, Router} from '@angular/router';
import {SurveyFilter} from 'src/app/models/survey-filter';
import {SurveyFilterService} from 'src/app/services/survey-filter.service';
import {
  educationList,
  genderList,
  laborSectorList,
  maritalStatusList,
  RemoveElementFromStringArray
} from 'src/app/global'

@Component({
  selector: 'app-create-filter-screen',
  templateUrl: './create-filter-screen.component.html',
  styleUrls: ['./create-filter-screen.component.css']
})
export class CreateFilterScreenComponent implements OnInit {
  id: number;
  formatLabel: any;
  email: string = "";
  editMode: boolean = false;
  showSubmit: boolean = false;

  surveyFilter: SurveyFilter = {
    ageMax: 50,
    ageMin: 13,
    educations: [],
    genders: [],
    grossEarningsMax: 3000,
    grossEarningsMin: 2500,
    id: -1,
    laborSectors: [],
    maritalStatuses: [],
    sizeOfTheHometownMax: 100000,
    sizeOfTheHometownMin: 60000,
    sizeOfTownMax: 100000,
    sizeOfTownMin: 60000,
    surveyId: 0,
  }
  // @ts-ignore
  educationsList: string[] = educationList;
  gendersList: string[] = genderList;
  laborSectorsList: string[] = laborSectorList;
  maritalStatusesList: string[] = maritalStatusList;

  constructor(public router: Router, private props: ActivatedRoute, private service: SurveyFilterService) {
    // @ts-ignore
    this.id = this.props.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {

    if (localStorage.getItem('edit') === 'true') {
      localStorage.removeItem('edit');
      this.editMode = true;
      let email = localStorage.getItem('email');
      // @ts-ignore
      this.service.get(this.id, email).subscribe(value => {
        this.surveyFilter = value;
      })
    }
  }

  edit() {
    alert('If you edit filter all resoult of survey was delete ,If you accept this click submit');
    this.showSubmit = true;
  }

  submit() {
    console.log(this.surveyFilter.genders);
    this.service.editSurveyFilter(this.surveyFilter).subscribe(value => {
      console.log(value);
      if (this.surveyFilter.id == value.id) {
        alert("Saved");
      }
    })

  }

  next() {
    this.surveyFilter.surveyId = this.id;
    console.log(this.surveyFilter);
    this.service.setSurveyFilter(this.surveyFilter).subscribe(value => {
        console.log(value);
        if (value.id == null) {
          alert("Error")
        } else {
          localStorage.setItem('edit', 'false');
          this.router.navigate([`cq/${value.surveyId}`]);
        }

      }, (err) => {
        alert("wrong credentials!!!")
      }
    );
  }

  onInputChangeMin(min: number, max: number, event: MatSliderChange): number {
    // @ts-ignore
    if (event.value < max) {
      // @ts-ignore
      return event.value;
    }
    return max - 1;
  }

  onInputChangeMax(min: number, max: number, event: MatSliderChange): number {
    // @ts-ignore
    if (event.value > min) {
      // @ts-ignore
      return event.value;
    } else {
      return min + 1;
    }
  }

  editList(list: string[], value: string): string[] {
    if (list.includes(value)) {
      list = RemoveElementFromStringArray(list, value);
    } else {
      list.push(value);
    }
    return list;
  }
}
