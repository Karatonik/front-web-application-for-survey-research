import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {Router} from '@angular/router';
import {Award, Reward} from 'src/app/models/login';
import {RewardService} from 'src/app/services/reward.service';
import {UserService} from 'src/app/services/user.service';

@Component({
  selector: 'app-gratification-screen',
  templateUrl: './gratification-screen.component.html',
  styleUrls: ['./gratification-screen.component.css']
})
export class GratificationScreenComponent implements OnInit {
  points: number;
  displayedColumns: string[] = ['name', 'cost', 'localDataTime'];

  dataSource: MatTableDataSource<Award>;
  rewardList: Reward[];

  constructor(public router: Router, private userService: UserService, private rewardService: RewardService) {
  }

  ngOnInit(): void {
    let email = localStorage.getItem('email');
    // @ts-ignore
    this.userService.getPoints(email).subscribe(value => {
      console.log(value);
      // @ts-ignore
      localStorage.setItem('points', value);
      this.points = value;
    });
    this.getAllData();

  }

  getAllData(): void {
    let email = localStorage.getItem('email');

    this.rewardService.getAllRewards().subscribe(value => {
      this.rewardList = value;
    }, (err) => {
      alert("wrong credentials!!!")
    });
    // @ts-ignore
    this.userService.getUserAwards(email).subscribe(value => {
        this.dataSource = new MatTableDataSource<Award>(value);
      }, (err) => {
        alert("wrong credentials!!!")
      }
    );
  }

  getReward(name: string) {
    let email = localStorage.getItem('email');
    // @ts-ignore
    this.rewardService.getRewardForUser(name, email).subscribe(value => {
      if (value) {
        alert("award received, check your email inbox");
      } else {
        alert("insufficient funds on the account");
      }
    })

  }
}
