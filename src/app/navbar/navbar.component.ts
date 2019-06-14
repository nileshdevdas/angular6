import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  loginStatus = false;

  ngOnInit() {
    if (sessionStorage.getItem("token") != null) {
      this.loginStatus = true;
    }
    this.loginService.getLoginSubscriber().subscribe(result => {
      this.loginStatus = result.loggedin;
      console.log(this.loginStatus)
    });

  }
  constructor(public router: Router, public loginService: LoginService) { }
  handleLogout() {
    sessionStorage.removeItem("token");
    this.loginStatus = false;
    this.router.navigate(['login']);
  }
  handleLogin() {
    this.router.navigate(['login']);
  }
}
