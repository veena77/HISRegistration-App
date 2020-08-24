import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  constructor(private http:HttpClient) { }

  public doEnrollment(enrollment){
     return this.http.post(
                        "http://localhost:9494/HIS/registeruser", 
                        enrollment, 
                        {
                          responseType:'text' as 'json'
                        }                        
                    );
  }
  }
