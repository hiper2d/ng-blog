import {Actions, Effect} from "@ngrx/effects";
import {CommentsActions} from "../actions/comments.actions";
import {CommentService} from "../../services/comment.service";
import {Injectable} from "@angular/core";
import {RecordComment} from "../../model/comment.model";

@Injectable()
export class CommentsEffects {
	constructor(
		private _actions: Actions,
		private _commentsActions: CommentsActions,
	  private _commentService: CommentService
	) {}
	
	@Effect()
	loadComments = this._actions
		.ofType(CommentsActions.LOAD_COMMENTS)
		.map(action => action.payload)
		.switchMap(recordId => this._commentService.loadComments(recordId))
		.map(comments => this._commentsActions.loadCommentsSuccess(comments));
	
	@Effect()
	saveComment = this._actions
		.ofType(CommentsActions.ADD_COMMENT)
		.map<RecordComment>(action => action.payload)
		.switchMap(comment => this._commentService.saveComment(comment))
		.map(comment => this._commentsActions.addCommentSuccess(comment))
}