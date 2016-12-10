import {Effect, Actions} from "@ngrx/effects";
import {Injectable} from "@angular/core";
import {RecordsActions} from "../actions/records.actions";
import {BlogService} from "../../services/blog.service";
import {RecordDetailsActions} from "../actions/record-details.action";

@Injectable()
export class RecordsEffect {
	constructor (
		private update$: Actions,
		private _recordsActions: RecordsActions,
		private _recordDetailActions: RecordDetailsActions,
		private _blogService: BlogService,
	) {
		
	}
	
	@Effect()
	loadRecords$ = this.update$
		.ofType(RecordsActions.LOAD_RECORDS)
		.switchMap(() => this._blogService.loadRecords())
		.map(records => this._recordsActions.loadRecordsSuccess(records));
	
	@Effect()
	getRecordDetail$ = this.update$
		.ofType(RecordsActions.ADD_RECORD)
		.map<string>(action => action.payload)
		.switchMap(id => this._blogService.getRecord(id))
		.map(record => this._recordDetailActions.getRecordDetailSuccess(record));
}