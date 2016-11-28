import {RecordAction} from "./record.action";
import {Record} from "../../model/record.model";

export const records = (state: any = [], {type, payload}) => {
	switch (type) {
		case RecordAction[RecordAction.ADD_RECORDS]:
			return payload;
		case RecordAction[RecordAction.CREATE_RECORD]:
			return [...state, payload];
		case RecordAction[RecordAction.UPDATE_RECORD]:
			return state.map((item:Record) => {
				return item.id === payload.id ? Object.assign({}, item, payload) : item;
			});
		case RecordAction[RecordAction.DELETE_RECORD]:
			return state.filter((item:Record) => {
				return item.id !== payload.id;
			});
		default:
			return state;
	}
};