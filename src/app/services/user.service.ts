import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  serverURL = 'http://localhost:8080/rest_server2/';
  //serverURL = 'http://200.0.1.239:8080/rest_server2/';
  constructor(private http:HttpClient) { }


  login(user)
  {
   // alert("in service login");
    return this.http.post(this.serverURL+'users/login',user);
  }

  register(user)
  {
   // alert("in service register");
    return this.http.post(this.serverURL+'users/reg',user);
  }
}
