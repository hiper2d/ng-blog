import {Injectable} from "@angular/core";
import {Action} from "@ngrx/store";
import {RecordComment} from "../../model/comment.model";

@Injectable()
export class CommentsActions {
	static LOAD_COMMENTS = '[Comment] Load Comments';
	loadComments(recordId: string): Action {
		return {
			type: CommentsActions.LOAD_COMMENTS,
			payload: recordId
		}
	}
	
	static LOAD_COMMENTS_SUCCESS = '[Comment] Load Comments Success';
	loadCommentsSuccess(comments: Array<RecordComment>): Action {
		return {
			type: CommentsActions.LOAD_COMMENTS_SUCCESS,
			payload: comments
		}
	}
	
	static ADD_COMMENT = '[Comment] Add Comment';
	addComment(comment: RecordComment): Action {
		return {
			type: CommentsActions.ADD_COMMENT,
			payload: comment
		}
	}
	
	static ADD_COMMENT_SUCCESS = '[Comment] Add Comment Success'
	addCommentSuccess(comment: RecordComment): Action {
		return {
			type: CommentsActions.ADD_COMMENT_SUCCESS,
			payload: comment
		}
	}
}