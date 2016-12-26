import {Component} from "@angular/core";
import {Store} from "@ngrx/store";
import {AppStore} from "../../../../store/app.store";
import {Record} from "../../../../model/record.model";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {RecordsActions} from "../../../../store/actions/records.actions";
import {NewRecordActions} from "../../../../store/actions/new-record.actions";
import {NewRecordState} from "../../../../store/reduces/new-record.reducer";

@Component({
	selector: '.h2d-new-record',
	templateUrl: './new-record.component.html',
	styleUrls: ['./new-record.component.scss']
})
export class NewRecordComponent {
	title: string;
	description: string;
	content: string;

	private _addedRecord: Observable<Record>;

	constructor(
		private _router: Router,
		private _store: Store<AppStore>,
		private _recordsActions: RecordsActions,
		private _newRecordActions: NewRecordActions,
	) {
		this._addedRecord = _store.select<NewRecordState>('newRecord');
	}

	createNewRecord() {
		let newRecord = new Record (
			null,
			this.title,
			this.description,
			this.content,
			null
		);
		this._store.dispatch(this._newRecordActions.newRecord(newRecord));
		this._addedRecord.subscribe(rec => {
			console.log(rec);
			this._store.dispatch(this._recordsActions.loadRecords());
			this._router.navigate(['/record', rec.id]);
		});
	}
}