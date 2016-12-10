import {Injectable} from "@angular/core";
import {Record} from "../../model/record.model";
import {Action} from "@ngrx/store";

@Injectable()
export class RecordDetailsActions {
	static GET_RECORD_DETAILS = "[Record Detail] Get Record";
	getRecordDetail(id): Action {
		return {
			type: RecordDetailsActions.GET_RECORD_DETAILS,
			payload: id
		}
	}
	
	static GET_RECORD_DETAILS_SUCCESS = '[Record Detail] Get Record Success';
	getRecordDetailSuccess(record: Record): Action {
		return {
			type: RecordDetailsActions.GET_RECORD_DETAILS_SUCCESS,
			payload: record
		}
	}
}