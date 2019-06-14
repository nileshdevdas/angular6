import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username;
  password;
  constructor(public router: Router) { }
  ngOnInit() { }
  login() {
    sessionStorage.setItem("token", btoa(this.username + ":" + this.password));
    this.router.navigate(['search']);
  }
}