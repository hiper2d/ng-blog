import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {User} from "../model/user.model";

@Injectable()
export class AuthService {
	isLoggedIn: boolean = false;
	currentUser: User;
	
	// store the URL so we can redirect after logging in
	redirectUrl: string;
	
	login() {
		return Observable.of(true).do(val => {
			this.isLoggedIn = true;
			this.currentUser = {name: 'Admin'};
		});
	}
	
	logout(): void {
		this.isLoggedIn = false;
	}
}