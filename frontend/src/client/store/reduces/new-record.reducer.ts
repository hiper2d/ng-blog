import {Record} from "../../model/record.model";
import {Action} from "@ngrx/store";
import {NewRecordActions} from "../actions/new-record.actions";

export type NewRecordState = Record;

const initState: Record = null;

export default function(state: NewRecordState = initState, action: Action) {
    switch (action.type) {
        case NewRecordActions.NEW_RECORD_SUCCESS: {
            return action.payload;
        }
        case NewRecordActions.RESET_NEW_RECORD: {
            return undefined;
        }
        default:
            return state;
    }
}