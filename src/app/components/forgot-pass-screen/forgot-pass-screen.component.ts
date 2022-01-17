import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-forgot-pass-screen',
  templateUrl: './forgot-pass-screen.component.html',
  styleUrls: ['./forgot-pass-screen.component.css']
})
export class ForgotPassScreenComponent implements OnInit {
  email: string ="";
  constructor(public router: Router, private  auth: AuthService) { }

  ngOnInit(): void {
  }

  sendMail() {
    this.auth.sendKeyToChangePassword(this.email).subscribe(value => {
      console.log(value);
      if(value) {
        alert("Check address email!!!")
        this.router.navigate(['']);
      }else {
        alert("email wasn`t recognized!!!")
      }
      }, (err) => {
        alert('Error');
      }
    );

  }

  goBack() {
    this.router.navigate(['']);
  }
}
