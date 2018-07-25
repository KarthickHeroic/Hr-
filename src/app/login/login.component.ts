import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public authService: AuthService, public router: Router) { }

  ngOnInit() {
  }


  signInWithEmail() {
    this.authService.signInRegular('admin', 'pass@123')
      .then((res) => {
                console.log(res);
        console.log("Successfully login");
        this.router.navigate(['app-dashboard']);
      })
      .catch((err) => console.log('error: ' + err));
  }

  signup() {
    this.authService.signup('admin', 'pass@123')
      .then((res) => {
        console.log(res);

      console.log("Successfully created");

      })
      .catch((err) => console.log('error: ' + err));
  }

  logout(){
this.authService.signout();
  }

  status(){
    this.authService.status();
  }


}
