import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UserInterface } from './../models/user';

@Injectable()
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  public registerUser(user: UserInterface) {
    return this.http.post(`http://localhost:1354/user/newuser`, user);
  }

  public loginUser(user) {
    return this.http.post(`http://localhost:1354/user/authenticate`, user);//.map(response => response.json());
  }

}
