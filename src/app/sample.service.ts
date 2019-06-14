import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  constructor(public http: HttpClient) { }

  getUserInfo(){
    return this.http.get("http://localhost:5001/hello")
  }
}
