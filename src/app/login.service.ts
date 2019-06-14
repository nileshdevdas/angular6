import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loginInfo: BehaviorSubject<any> = new BehaviorSubject({ loggedin: false })
  constructor() {
  }

  getLoginPublisher() {
    // return the subject 
    return this.loginInfo;
  }
  getLoginSubscriber() {
    return this.loginInfo.asObservable();
  }
}
