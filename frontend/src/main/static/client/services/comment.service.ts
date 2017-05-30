import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {RecordComment} from "../model/comment.model";
import {AppStore} from "../store/app.store";
import {Http} from "@angular/http";
import {RecordCommentsState} from "../store/reduces/comments.reducer";

@Injectable()
export class CommentService {
	static SPRING_SERVER = "http://localhost:9001/ng-blog/api/comment";
	
	comments: Observable<Array<RecordComment>>;
	
	constructor(
		private _http: Http,
		private _store: Store<AppStore>,
	) {
		this.comments = _store.select<RecordCommentsState>('recordComments');
	}
	
	loadComments(recordId: string): Observable<RecordCommentsState> {
		return this._http.get(CommentService.SPRING_SERVER + "/" + recordId).map(res => <Array<RecordComment>> res.json());
	}
	
	saveComment(comment: RecordComment): Observable<RecordComment> {
		return this._http.post(CommentService.SPRING_SERVER, comment).map(res => res.json());
	}
}

