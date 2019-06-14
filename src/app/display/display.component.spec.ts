import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DisplayComponent } from './display.component';
import { Service1Service } from '../service1.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('DisplayComponent', () => {
  let component: DisplayComponent;
  let fixture: ComponentFixture<DisplayComponent>;
  beforeEach(async(() => {
    console.log("Before......")
    TestBed.configureTestingModule({
      declarations: [DisplayComponent],
      imports: [HttpClientModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    console.group("Before......")
    fixture = TestBed.createComponent(DisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("Title Must be Hello", () => {
    expect(component.title == "Hello").toBeTruthy();
  })

  it("Service Must be injected ", () => {
    expect(component.service1).toBeTruthy();
  })
});










