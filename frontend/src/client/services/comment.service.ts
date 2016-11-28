import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {RecordComment} from "../model/comment.model";
import {RecordStore} from "../stores/record.store";
import {CommentAction} from "../stores/reduces/comment.actions";

@Injectable()
export class CommentService {
	comments: Observable<Array<RecordComment>>;
	
	constructor(private _store: Store<RecordStore>) {
		this.comments = _store.select<Array<RecordComment>>('recordComments');
	}
	
	loadComments(recordId: string): void {
		//this.comments.subscribe(a => console.log(a.length));
		//this.store.dispatch({type: CommentAction[CommentAction.ADD_COMMENT], payload: []});
	}
	
	saveComment(comment: RecordComment) {
		(comment.id !== null) ? this.updateComment(comment) : this.createComment(comment);
	}
	
	deleteComment(comment: RecordComment) {
		this._store.dispatch({type: CommentAction[CommentAction.DELETE_COMMENT], payload: comment});
	}
	
	private updateComment(comment: RecordComment) {
		this._store.dispatch({type: CommentAction[CommentAction.UPDATE_COMMENT], payload: comment});
	}
	
	private createComment(comment: RecordComment) {
		this._store.dispatch({type: CommentAction[CommentAction.CREATE_COMMENT], payload: this.addUUID(comment)});
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

