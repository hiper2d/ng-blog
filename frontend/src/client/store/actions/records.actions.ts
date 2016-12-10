import {Injectable} from "@angular/core";
import {Action} from "@ngrx/store";
import {Record} from "../../model/record.model";

@Injectable()
export class RecordsActions {
	static LOAD_RECORDS = '[Records] Load Records';
	loadRecords(): Action {
		return { type: RecordsActions.LOAD_RECORDS }
	}
	
	static LOAD_RECORDS_SUCCESS = '[Records] Load Records Success';
	loadRecordsSuccess(records: Array<Record>): Action {
		return {
			type: RecordsActions.LOAD_RECORDS_SUCCESS,
			payload: records
		}
	}
	
	static ADD_RECORD = '[Records] Add Record';
	addRecord(record: Record): Action {
		return {
			type: RecordsActions.ADD_RECORD,
			payload: record
		};
	}
	
	static ADD_RECORD_SUCCESS = '[Records] Add Record Success';
	addRecordSuccess(record: Record): Action {
		return {
			type: RecordsActions.ADD_RECORD_SUCCESS,
			payload: record
		};
	}
}