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
	static SPRING_SERVER = "http://localhost:9001/api/comment";
	
	comments: Observable<Array<RecordComment>>;
	
	constructor(
		private _http: Http,
		private _store: Store<AppStore>,
	  	private _commentsActions: CommentsActions
	) {
		this.comments = _store.select<Array<RecordComment>>('recordComments');
	}
	
	loadComments(recordId: string): Observable<RecordCommentsState> {
		return this._http.get(CommentService.SPRING_SERVER + "/" + recordId).map(res => <Array<RecordComment>> res.json());
	}
	
	saveComment(comment: RecordComment): Observable<Response> {
		return this._http.post(CommentService.SPRING_SERVER, comment).map(res => res.json());
	}
}

