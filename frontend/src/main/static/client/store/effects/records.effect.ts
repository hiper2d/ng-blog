import {Effect, Actions} from "@ngrx/effects";
import {Injectable} from "@angular/core";
import {RecordsActions} from "../actions/records.actions";
import {BlogService} from "../../services/blog.service";
import {RecordDetailsActions} from "../actions/record-details.action";
import {Record} from "../../model/record.model";
import {NewRecordActions} from "../actions/new-record.actions";

@Injectable()
export class RecordsEffect {
	constructor (
		private _actions: Actions,
		private _recordsActions: RecordsActions,
		private _newRecordActions: NewRecordActions,
		private _recordDetailActions: RecordDetailsActions,
		private _blogService: BlogService,
	) { }

	@Effect()
	newRecord = this._actions
        .ofType(NewRecordActions.NEW_RECORD)
        .map(action => action.payload)
        .switchMap(rec => this._blogService.addRecord(rec))
        .map(rec => this._newRecordActions.newRecordSuccess(rec));
	
	@Effect()
	loadRecords = this._actions
		.ofType(RecordsActions.LOAD_RECORDS)
		.switchMap(() => this._blogService.loadRecords())
		.map(records => this._recordsActions.loadRecordsSuccess(records));
	
	@Effect()
	getRecordDetail = this._actions
		.ofType(RecordDetailsActions.GET_RECORD_DETAILS)
		.map(action => action.payload)
		.switchMap(id => this._blogService.getRecord(id))
		.map(record => this._recordDetailActions.getRecordDetailSuccess(record));
}