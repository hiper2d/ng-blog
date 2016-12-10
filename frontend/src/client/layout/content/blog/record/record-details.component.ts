import {Component, OnInit} from "@angular/core";
import {Router, ActivatedRoute, Params} from "@angular/router";
import {BlogService} from "../../../../services/blog.service";
import {Record} from "../../../../model/record.model";
import {CommentService} from "../../../../services/comment.service";
import {Observable} from "rxjs";
import {RecordComment} from "../../../../model/comment.model";
import {Store} from "@ngrx/store";
import {AppStore} from "../../../../store/app.store";
import {RecordDetailsActions} from "../../../../store/actions/record-details.action";
import {CommentsActions} from "../../../../store/actions/comments.actions";

@Component({
	selector: 'div.h2d-record-details',
	templateUrl: './record-details.component.html',
	styleUrls: ['./record-details.component.scss']
})
export class RecordDetailsComponent implements OnInit {
	private selectedRecord: Observable<Record>;
	private comments: Observable<Array<RecordComment>>;
	newCommentText: string;
	
	constructor(
		private _activatedRoute: ActivatedRoute,
		private _store: Store<AppStore>,
	  private _recordDetailActions: RecordDetailsActions,
	  private _commentsActions: CommentsActions
	) {
		this.comments = _store.select<Array<RecordComment>>('recordComments');
		this.selectedRecord = _store.select<Record>('recordDetails');
		//this._comments.subscribe(a => {});
	}
	
	ngOnInit() {
		this._activatedRoute.params
			.switchMap((params: Params) => params['id'])
			.subscribe(id => this._store.dispatch(this._recordDetailActions.getRecordDetail(id)));
	}
	
	addComment() {
		//this._commentService.saveComment({id: null, recordId: this.selectedRecord.id, text: this.newCommentText});
		this._store.dispatch(this._commentsActions.loadComments())
	}
}