import { Component, OnInit, Self, Optional, Host } from '@angular/core';
import { SampleService } from '../sample.service';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css'],
  providers: [SampleService]
})
export class SampleComponent implements OnInit {
  user = {};
  test = ["a", "b", "c", "a", "b", "c" , "d"];
  constructor(public service: SampleService) { }
  ngOnInit() {
  }
  getUserDetails() {
    console.log("get User Details0");
    // covnerts your stream Observable stream into a  transfomer stream 
    console.log(this.service.getUserInfo());
    this.user = this.service.getUserInfo().pipe();
    console.log(this.user);
  }

}
