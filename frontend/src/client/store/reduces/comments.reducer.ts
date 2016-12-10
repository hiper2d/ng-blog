import {RecordComment} from "../../model/comment.model";
import {Action} from "@ngrx/store";
import {CommentsActions} from "../actions/comments.actions";

export type RecordCommentsState = Array<RecordComment>;

const initState: RecordCommentsState = [];

export default function (state = initState, action: Action): RecordCommentsState {
	switch (action.type) {
		case CommentsActions.LOAD_COMMENTS_SUCCESS: {
			return action.payload;
		}
		case CommentsActions.ADD_COMMENT_SUCCESS: {
			return [state, ...action.payload];
		}
		default: {
			return state;
		}
	}
}