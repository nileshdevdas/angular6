import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username;
  password;
  constructor(public router: Router, public loginService: LoginService) { }
  ngOnInit() { }
  login() {
    sessionStorage.setItem("token", btoa(this.username + ":" + this.password));
    //send the login infor
    this.loginService.getLoginPublisher().next({
      loggedin: true
    });
    this.router.navigate(['search']);

  }






}