import {Record} from "../../model/record.model";
import {Action} from "@ngrx/store";
import {RecordDetailsActions} from "../actions/record-details.action";

export type RecordDetailState = Record;

const initState: Record = null;

export default function(state: RecordDetailState = initState, action: Action) {
	switch (action.type) {
		case RecordDetailsActions.GET_RECORD_DETAILS_SUCCESS: {
			return action.payload;
		}
	}
}