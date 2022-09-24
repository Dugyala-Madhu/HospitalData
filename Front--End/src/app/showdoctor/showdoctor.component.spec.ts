import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowdoctorComponent } from './showdoctor.component';
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientTestingModule} from "@angular/common/http/testing";


describe('ShowdoctorComponent', () => {
  let component: ShowdoctorComponent;
  let fixture: ComponentFixture<ShowdoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowdoctorComponent ],
      imports:[RouterTestingModule,HttpClientTestingModule],

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowdoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
  expect(component).toBeTruthy();
  });

 //it("testing doctordetails",()=>{
 //   expect(component.ngOnInit).toContain(component.doctor);
// });
});
