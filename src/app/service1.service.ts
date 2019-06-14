import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class Service1Service {
  constructor(public http: HttpClient) { }

  getUser() {
    return undefined;
  }
}
