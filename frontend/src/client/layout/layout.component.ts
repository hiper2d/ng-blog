import {Component, ViewEncapsulation} from '@angular/core';
import '../../public/assets/css/reset.css';
import '../../public/assets/css/global.css';
import {AuthService} from "../services/auth.service";

@Component({
	selector: 'div.h2d-layout',
	templateUrl: './layout.component.html',
	styleUrls: ['./layout.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class LayoutComponent {
	constructor(public authService: AuthService) {
		
	}
}