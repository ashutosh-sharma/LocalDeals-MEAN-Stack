import { Component, OnInit } from '@angular/core';
import { UserInterface } from './../models/user';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  private id = 0;

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  public submitForm(signInForm) {
      console.log(`user is trying to log in`);

      let User =  {
        //id: this.id++,
        email: signInForm.inputEmail.value,
        password: signInForm.inputPassword.value,
      }

      // console.log(JSON.stringify(User));
      this.authenticationService.loginUser(User).subscribe((response)=>{
        console.log(response);
      });
    }

}
