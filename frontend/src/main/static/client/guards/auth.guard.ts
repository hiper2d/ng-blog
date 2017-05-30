import {CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router} from "@angular/router";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {AuthService} from "../services/auth.service";

@Injectable()
export class AuthGuard implements CanActivate {
	constructor(private _authService: AuthService, private _router: Router) {
		console.log('Construct auth guard');
	}
	
	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>|Promise<boolean>|boolean {
		console.log('AuthGuard#canActivate called');
		let url: string = state.url;
		return this.checkLogin(url);
	}
	
	checkLogin(url: string): boolean {
		console.log('Check if loggined: ' + this._authService.isLoggedIn);
		if (this._authService.isLoggedIn) {
			return true;
		}
		this._authService.redirectUrl = url;
		this._router.navigate(['/login']);
		return false;
	}
}