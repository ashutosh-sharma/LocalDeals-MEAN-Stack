import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  private showSignIn = false;
  private showSignUp = true;

  constructor() { }

  ngOnInit() {
  }

  public showSignInForm(){
    this.showSignIn = true;
    this.showSignUp = false;
    console.log(this);
    $("#up").toggleClass('border-right disabled');
    $("#in").toggleClass('border-left disabled');
  }

  public showSignUpForm(){
      this.showSignIn = false;
      this.showSignUp = true;
      $("#in").toggleClass('border-left disabled');
      $("#up").toggleClass('border-right disabled');
  }

}
