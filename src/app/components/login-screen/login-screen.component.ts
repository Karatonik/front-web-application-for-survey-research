import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {Login} from "../../models/login";

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css']
})
export class LoginScreenComponent implements OnInit {
  loginData: Login = {email: "", password: ""};

  constructor(public router: Router, private auth: AuthService) {
  }

  ngOnInit(): void {
  }

  login(): void {
    this.auth.login(this.loginData).subscribe(value => {
        if (value.activated == true) {
          console.log(value);
          localStorage.setItem('token', value.token);
          localStorage.setItem('email', value.email);
          localStorage.setItem('points', value.points.toLocaleString());
          localStorage.setItem('accountType',value.accountType);
          this.router.navigate(['home']);
        } else {
          if (value.email == null) {
            alert("account not exist")
          } else {
            alert("you account isnt verficated");
          }
        }
      }, (err) => {
        alert("wrong credentials!!!")
      }
    );
  }


  register(): void {
    this.router.navigate(['reg']);
  }

  changePass() {
    this.router.navigate(['fp']);
  }
}
