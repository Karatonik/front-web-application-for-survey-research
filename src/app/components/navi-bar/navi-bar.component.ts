import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navi-bar',
  templateUrl: './navi-bar.component.html',
  styleUrls: ['./navi-bar.component.css']
})
export class NaviBarComponent implements OnInit {
  show: any;
  points: String = "";
  accountType: string;

  constructor(public router: Router) {
    // @ts-ignore
    this.points = localStorage.getItem("points");
    // @ts-ignore
    this.accountType = localStorage.getItem('accountType');
  }

  ngOnInit(): void {
  }

  backToHome() {
    this.router.navigate(['home']);
  }

  Logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    localStorage.removeItem('points');
    this.router.navigate(['']);

  }
}
