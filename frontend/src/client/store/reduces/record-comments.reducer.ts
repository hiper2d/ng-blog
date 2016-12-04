import {CommentAction} from "./comment.actions";
import {RecordComment} from "../../model/comment.model";

export const recordComments = (state: any = [], {type, payload}) => {
	switch (type) {
		case CommentAction[CommentAction.ADD_COMMENT]:
			return payload;
		case CommentAction[CommentAction.CREATE_COMMENT]:
			return [...state, payload];
		case CommentAction[CommentAction.UPDATE_COMMENT]:
			return state.map((item:RecordComment) => {
				return item.id === payload.id ? Object.assign({}, item, payload) : item;
			});
		case CommentAction[CommentAction.DELETE_COMMENT]:
			return state.filter((item:RecordComment) => {
				return item.id !== payload.id;
			});
		default:
			return state;
	}
};