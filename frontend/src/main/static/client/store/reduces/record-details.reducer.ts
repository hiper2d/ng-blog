import {Record} from "../../model/record.model";
import {Action} from "@ngrx/store";
import {RecordDetailsActions} from "../actions/record-details.action";

export type RecordDetailsState = Record;

const initState: Record = new Record();

export default function(state: RecordDetailsState = initState, action: Action) {
	switch (action.type) {
		case RecordDetailsActions.GET_RECORD_DETAILS_SUCCESS: {
			return action.payload;
		}
		default:
			return state;
	}
}