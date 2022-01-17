import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from 'src/app/services/auth.service';

@Component({
  selector: 'app-reset-password-screen',
  templateUrl: './reset-password-screen.component.html',
  styleUrls: ['./reset-password-screen.component.css']
})
export class ResetPasswordScreenComponent implements OnInit {
  key: string = "";
  password: string = "";
  testPassword: string = "";

  constructor(private props: ActivatedRoute, public router: Router, private auth: AuthService) {
    // @ts-ignore
    this.key = this.props.snapshot.paramMap.get('key')
  }

  ngOnInit(): void {
  }

  submit() {
    if (this.password == this.testPassword) {
      this.auth.changePassword(this.key, this.password).subscribe(value => {
          if (value) {
            alert("New password is save");
            this.router.navigate(['']);
          } else {
            alert("Service error")
          }
        }, (err) => {
          alert("ERROR")
        }
      );
    } else {
      alert("passwords arent equals")
    }
  }
}
