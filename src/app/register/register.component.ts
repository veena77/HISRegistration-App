import { Component, OnInit } from '@angular/core';
import {Enrollment} from '../Enrollment';
import {UserserviceService} from '../userservice.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  role=['ADMIN','CASE WORKER'];
  gender=['Male','Female'];

  enrollment= new Enrollment("","","","","","");
  message:any;
  submitted = false;

  constructor(private enrollmentService: UserserviceService) { }
  public createNow(){
    let resp = this.enrollmentService.doEnrollment(this.enrollment);
    resp.subscribe((data) => this.message = data)
  }


  ngOnInit(): void {
  }

}
