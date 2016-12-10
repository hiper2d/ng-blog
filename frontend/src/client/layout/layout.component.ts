import {Component, ViewEncapsulation, OnInit} from '@angular/core';
import '../../public/assets/css/reset.css';
import '../../public/assets/css/global.css';
import {AuthService} from "../services/auth.service";
import {Store} from "@ngrx/store";
import {AppStore} from "../store/app.store";
import {RecordsActions} from "../store/actions/record.actions";

@Component({
	selector: 'div.h2d-layout',
	templateUrl: './layout.component.html',
	styleUrls: ['./layout.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class LayoutComponent implements OnInit {
	constructor(
		public authService: AuthService,
	  private _store: Store<AppStore>,
		private _recordsActions: RecordsActions
	) {
		
	}
	
	ngOnInit(): void {
		this._store.dispatch(this._recordsActions.loadRecords());
	}
}