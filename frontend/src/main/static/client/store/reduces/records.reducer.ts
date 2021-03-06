import {Record} from "../../model/record.model";
import {Action} from "@ngrx/store";
import {RecordsActions} from "../actions/records.actions";

export type RecordsState = Array<Record>;

const initState: RecordsState = [];

export default function (state: RecordsState = initState, action: Action) {
	switch (action.type) {
		case RecordsActions.LOAD_RECORDS_SUCCESS: {
			return action.payload;
		}
		default: {
			return state;
		}
	}
};