import {Component} from "@angular/core";
import {AuthService} from "../../../services/auth.service";
import {Router} from "@angular/router";

@Component({
	selector: 'div.h2d-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent {
	message: string;
	
	constructor(public authService: AuthService, private _router: Router) {
	}
	
	setMessage() {
		this.message = this.authService.isLoggedIn ? 'Logged as ' + this.authService.currentUser.name : '';
	}
	
	login() {
		this.message = 'Trying to log in ...';
		this.authService.login().subscribe(() => {
			this.setMessage();
			if (this.authService.isLoggedIn) {
				let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/blog';
				this._router.navigate([redirect]);
			}
		})
	}
	
	logout() {
		this.authService.logout();
		this.setMessage();
	}
}