import {Component, OnInit} from '@angular/core';
import {MatSliderChange} from '@angular/material/slider';
import {PersonalData} from 'src/app/models/personal-data';
import {educationList, genderList, laborSectorList, maritalStatusList} from 'src/app/global'
import {PersonalDataService} from 'src/app/services/personal-data.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-personal-screen',
  templateUrl: './personal-screen.component.html',
  styleUrls: ['./personal-screen.component.css']
})
export class PersonalScreenComponent implements OnInit {
  email: string = "";
  defaultSelected = 0

  // @ts-ignore
  maritalStatusList: string[] = maritalStatusList;
  laborSectorList: string[] = laborSectorList;
  educationList: string[] = educationList;
  genderList: string[] = genderList;

  personalData: PersonalData = {
    age: 50,
    education: "",
    gender: "",
    grossEarnings: 2500,
    id: 1,
    laborSector: "",
    maritalStatus: "",
    sizeOfTheHometown: 100000,
    sizeOfTown: 100000,
    userEmail: ""
  }
  formatLabel: any;
  edit = false;

  constructor(public router: Router, private service: PersonalDataService) {

  }

  ngOnInit(): void {
   // @ts-ignore
    this.email = localStorage.getItem('email');
    this.service.getByEmail(this.email).subscribe(value => {
      if(value.id != null){
        this.personalData = value;
        this.edit = true;
      }



    }, (err) => {
        alert("Error")
      }
    );
  }

  onInputChange(event: MatSliderChange): number {
    // @ts-ignore
    return event.value;
  }

  send() {
    // @ts-ignore
    this.personalData.userEmail = localStorage.getItem("email");

    console.log(this.personalData);
    if (this.edit) {
      this.service.edit(this.personalData).subscribe(value => {
        if (value.id == null) {
          alert("Error")
        }else{
          alert("personals have been updated")
          this.router.navigate(['home']);
        }
      }, (err) => {
        alert("wrong credentials!!!")
      });
    }
    else{
      this.service.set(this.personalData).subscribe(value => {

          if (value.id == null) {
            alert("Error")
          } else {
            localStorage.setItem("points", "500");
            alert("Saved, now you have access to surveys")
            this.router.navigate(['home']);
          }

        }, (err) => {
          alert("wrong credentials!!!")
        }
      );
    }
  }
}
