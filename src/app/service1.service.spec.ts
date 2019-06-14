import { TestBed } from '@angular/core/testing';

import { Service1Service } from './service1.service';
import { HttpClientModule } from '@angular/common/http';

describe('Service1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: Service1Service = TestBed.get(Service1Service);
    expect(service).toBeTruthy();
  });

  it("Check Service injection " , ()=> {
    const service: Service1Service = TestBed.get(Service1Service);
    expect(service.http).toBeTruthy();
  });

  it('Check User ' , ()=>{
    const service: Service1Service = TestBed.get(Service1Service);
    expect(service.getUser()).toBeUndefined()   
  });


});
