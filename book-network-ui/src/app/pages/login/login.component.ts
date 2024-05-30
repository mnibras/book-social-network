import {Component} from '@angular/core';
import {AuthenticationRequest} from "../../services/models/authentication-request";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../services/services/authentication.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  authRequest: AuthenticationRequest = {email: '', password: ''};
  errorMsg: Array<string> = [];

  constructor(private router: Router,
              private authService: AuthenticationService) {
  }

  login() {
    this.errorMsg = [];
    this.authService.login({body: this.authRequest})
      .subscribe({
        next: (res) => {
          // todo save token
          this.router.navigate(['/books'])
        },
        error: (err) => {
          console.error(err);
          if (err.error.validationErrors) {
            this.errorMsg = err.error.validationErrors;
          } else {
            this.errorMsg.push(err.error.error);
          }
        }
      });
  }

  register() {
    this.router.navigate(['/register']);
  }
}
