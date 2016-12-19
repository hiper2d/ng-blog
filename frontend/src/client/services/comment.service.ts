import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {RecordComment} from "../model/comment.model";
import {AppStore} from "../store/app.store";
import {CommentsActions} from "../store/actions/comments.actions";
import {Http, Response} from "@angular/http";
import {RecordCommentsState} from "../store/reduces/comments.reducer";

@Injectable()
export class CommentService {
	static SPRING_SERVER = "http://localhost:9001/api";
	
	comments: Observable<Array<RecordComment>>;
	
	constructor(
		private _http: Http,
		private _store: Store<AppStore>,
	  private _commentsActions: CommentsActions
	) {
		this.comments = _store.select<Array<RecordComment>>('recordComments');
	}
	
	loadComments(recordId: string): Observable<RecordCommentsState> {
		return this._http.get(CommentService.SPRING_SERVER + "/comment?recordId=" + recordId).map(res => <Array<RecordComment>> res.json());
	}
	
	saveComment(comment: RecordComment): Observable<Response> {
		return this._http.post(CommentService.SPRING_SERVER + "/comment", comment).map(res => res.json());
		//(comment.id !== null) ? this.updateComment(comment) : this.createComment(comment);
	}
	
	deleteComment(comment: RecordComment) {
		//this._store.dispatch({type: CommentAction[CommentAction.DELETE_COMMENT], payload: comment});
	}
	
	private updateComment(comment: RecordComment) {
		//this._store.dispatch({type: CommentAction[CommentAction.UPDATE_COMMENT], payload: comment});
	}
	
	private createComment(comment: RecordComment) {
		this._store.dispatch(this._commentsActions.saveComment(this.addUUID(comment)));
	}
	
	private addUUID(comment: RecordComment): RecordComment {
		return Object.assign({}, comment, {id: this.generateUUID()});
	}
	
	private generateUUID(): string {
		return ('' + 1e7 + -1e3 + -4e3 + -8e3 + -1e11)
			.replace(/1|0/g, function() {
				return (0 | Math.random() * 16).toString(16);
			});
	};
}

