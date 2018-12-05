import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { UserInterface } from './../models/user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  private id = 0;

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  public submitForm(signUpForm) {
    console.log(`form was submitted!`);

    let User : UserInterface =  {
      //id: this.id++,
      name: signUpForm.inputName.value,
      email: signUpForm.inputEmail.value,
      password: btoa(signUpForm.inputPassword.value),
      user: signUpForm.inputUser.checked
    }
    this.authenticationService.registerUser(User).subscribe();
      // (Response)=> {
      // console.log(`SIGN UP: ${JSON.stringify(Response)}`);
      // if(response != 11000) alert("Congratulations! Your account has been created");
      // else alert("User Exists!");
        // console.log(Response.total);},
      // The 2nd callback handles errors.
      // (err) => console.error(err),
      // The 3rd callback handles the "complete" event.
      // () => console.log("observable complete")
    // });
  }

}
