import {Component, OnInit} from "@angular/core";
import {Observable} from "rxjs";
import {AppStore} from "../../../store/app.store";
import {Store} from "@ngrx/store";
import {RecordsActions} from "../../../store/actions/records.actions";
import {RecordsState} from "../../../store/reduces/records.reducer";

@Component({
	selector: 'div.h2d-blog',
	templateUrl: './blog.component.html',
	styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
	records: Observable<RecordsState>;
	
	constructor(
		private _store: Store<AppStore>,
	  	private _recordsActions: RecordsActions
	) {
		this.records = _store.select<RecordsState>('records');
	}
	
	ngOnInit(): void {
		this._store.dispatch(this._recordsActions.loadRecords());
	}
}