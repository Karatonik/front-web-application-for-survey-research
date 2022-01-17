import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-activate-screen',
  templateUrl: './activate-screen.component.html',
  styleUrls: ['./activate-screen.component.css']
})
export class ActivateScreenComponent implements OnInit {
  key: string =""
  constructor(private props: ActivatedRoute, public router: Router , private  auth: AuthService) {
    // @ts-ignore
    this.key = this.props.snapshot.paramMap.get('key')
  }
  ngOnInit(): void {
    this.auth.confirmation(this.key).subscribe(value => {
        if(value) {
          alert("account is activated")
          this.router.navigate(['']);
        }else {
          alert("System Error , you can find the newer key")
          this.router.navigate(['']);
        }
      }, (err) => {
        alert('Error');
      }
    );
  }

}
