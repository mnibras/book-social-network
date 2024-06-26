import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../../services/services/authentication.service";

@Component({
    selector: 'app-activate-account',
    templateUrl: './activate-account.component.html',
    styleUrl: './activate-account.component.scss'
})
export class ActivateAccountComponent {
    message: string = '';
    isActivated: boolean = true;
    submitted: boolean = false;

    constructor(private router: Router,
                private authService: AuthenticationService) {
    }

    onCodeCompleted(code: string) {
        this.confirmAccount(code);
    }

    redirectToLogin() {
        this.router.navigate(['/login']);
    }

    private confirmAccount(code: string) {
        this.authService.activate({token: code})
            .subscribe({
                next: () => {
                    this.message = 'Your account has been successfully activated.\nNow you can proceed to login';
                    this.submitted = true;
                    this.isActivated = true;
                },
                error: () => {
                    this.message = 'Token has been expired or invalid';
                    this.submitted = true;
                    this.isActivated = false;
                }
            })
    }
}
