import {Component, OnInit, Output, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {ActivatedRoute, Router} from '@angular/router';
import {Reward, UserInfo} from 'src/app/models/login';
import {RewardService} from 'src/app/services/reward.service';
import {UserService} from 'src/app/services/user.service';



@Component({
  selector: 'app-admin-screen',
  templateUrl: './admin-screen.component.html',
  styleUrls: ['./admin-screen.component.css']
})
export class AdminScreenComponent implements OnInit {
  adminEmail: string = "";
  userList: UserInfo[];
  rewardList: Reward[];
  name: string = "";
  cost: number;
  quantity: number;
  reward: Reward;

  dataSourceUser: MatTableDataSource<UserInfo> ;
  dataSourceReward: MatTableDataSource<Reward> ;

  displayedColumnsUser: string[] = ['email','points','activated','accountType','Action'];
  displayedColumnsReward: string[] = ['name','cost','quantity','Action'];

  @Output() userRow: UserInfo ;
  @Output() rewardRow: Reward ;

  constructor(public router: Router, private props: ActivatedRoute, public userService: UserService
    , public rewardService: RewardService) {
  }

  ngOnInit(): void {
    // @ts-ignore
    this.adminEmail = localStorage.getItem('email');
    if(localStorage.getItem('accountType')!='admin'){
      this.router.navigate(['home']);
    }
    this.initUserList();
    this.initRewardList();
  }



  setReward() {

    let reward: Reward ={
      name: this.name,
      cost: this.cost,
      quantity: this.quantity
    }
    this.rewardService.setReward(reward).subscribe(value => {
        this.initRewardList();
      }, (err) => {
        alert("Error")
      }
    );

  }

  initUserList() {
    this.userService.getAllUsers(this.adminEmail).subscribe(value => {
      console.log(value);
      this.dataSourceUser = new MatTableDataSource<UserInfo>(value);
      }, (err) => {
        alert("Error")
      }
    );
  }

  initRewardList() {
    this.rewardService.getAllRewards().subscribe(value => {
      console.log(value);
      this.dataSourceReward = new MatTableDataSource<Reward>(value);
      }, (err) => {
        alert("Error")
      }
    );
  }
  onUserRowClick(row: UserInfo): void {
    this.userRow = row;
  }
  onRewardRowClick(row: Reward): void {
    this.rewardRow = row;
  }

  deleteReward(element: any) {
    this.rewardService.deleteReward(element.name).subscribe(value => {
        if (value) {
          this.initRewardList();
          alert("accepted");
        } else {
          alert("Error");
        }
      }, (err) => {
        alert("Error")
      }
    );
  }


  applyFilterUser(filterValue: string): void {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSourceUser.filter = filterValue;
  }

  applyFilterReward(filterValue: string): void {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSourceReward.filter = filterValue;
  }
  increasePermissionsForUser(element: any) {
    this.userService.increasePermissionsForUser(this.adminEmail, element.email).subscribe(value => {
        if (value) {
          this.initUserList();
          alert("accepted");
        } else {
          alert("Error");
        }
      }, (err) => {
        alert("Error")
      }
    );
  }
  reducePermissionsForUser(element: any) {
    this.userService.reducePermissionsForUser(this.adminEmail, element.email).subscribe(value => {
        if (value) {
          this.initUserList();
          alert("accepted");
        } else {
          alert("Error");
        }
      }, (err) => {
        alert("Error")
      }
    );
  }
}

