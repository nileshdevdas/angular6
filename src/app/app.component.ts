import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loginStatus = false;
  ngOnInit() {
    console.log("here.....");
    if (sessionStorage.getItem("token") != null) {
      this.loginStatus = true;
    }
    this.loginService.getLoginSubscriber().subscribe(result => {
      this.loginStatus = result.loggedin;
      console.log(this.loginStatus)
    });

  }
  constructor(public router: Router, public loginService: LoginService) { }
  title = 'finalapp';
  handleLogout() {
    sessionStorage.removeItem("token");
    this.loginStatus = false;
    this.router.navigate(['login']);
  }
  handleLogin() {
    this.router.navigate(['login']);
  }
}
