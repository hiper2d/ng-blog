import {Injectable} from "@angular/core";
import {Record} from "../../model/record.model";
import {Action} from "@ngrx/store";

@Injectable()
export class NewRecordActions {
    static NEW_RECORD = '[New Record] New Record';
    newRecord(record: Record): Action {
        return {
            type: NewRecordActions.NEW_RECORD,
            payload: record
        };
    }

    static NEW_RECORD_SUCCESS = '[New Record] New Record Success';
    newRecordSuccess(record: Record): Action {
        return {
            type: NewRecordActions.NEW_RECORD_SUCCESS,
            payload: record
        };
    }

    static RESET_NEW_RECORD = '[New Record] Reset New Record';
    resetNewRecord(): Action {
        return {
            type: NewRecordActions.RESET_NEW_RECORD,
            payload: null
        };
    }
}