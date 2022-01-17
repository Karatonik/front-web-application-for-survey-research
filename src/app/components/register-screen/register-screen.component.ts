import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Login} from 'src/app/models/login';
import {AuthService} from 'src/app/services/auth.service';

@Component({
  selector: 'app-register-screen',
  templateUrl: './register-screen.component.html',
  styleUrls: ['./register-screen.component.css']
})
export class RegisterScreenComponent implements OnInit {
  loginData: Login = {email: "", password: ""};
  testPassword: string = "";

  constructor(public router: Router, private auth: AuthService) {
  }

  ngOnInit(): void {
  }

  register() {
    if (this.loginData.password == this.testPassword) {

      this.auth.register(this.loginData).subscribe(value => {
          alert(" Check your email!!!")
          this.router.navigate(['']);

        }, (err) => {
          console.log(err);
          console.log('Regex');
          // todo wyświetlanie błedu
        }
      );

    } else {
      alert("passwords isnt equal !!!")
    }

  }
}
