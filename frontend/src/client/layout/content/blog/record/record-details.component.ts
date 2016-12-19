import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params} from "@angular/router";
import {Record} from "../../../../model/record.model";
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
	selectedRecord: Observable<Record>;
	comments: Observable<Array<RecordComment>>;
	newCommentText: string;
	
	private _selectedRecordId: string;
	
	constructor(
		private _activatedRoute: ActivatedRoute,
		private _store: Store<AppStore>,
	  private _recordDetailActions: RecordDetailsActions,
	  private _commentsActions: CommentsActions
	) {
		this.comments = _store.select<Array<RecordComment>>('recordComments');
		this.selectedRecord = _store.select<Record>('recordDetails');
	}
	
	ngOnInit() {
		this._activatedRoute.params
			.map((params: Params) => params['id'])
			.subscribe(id => {
				this._store.dispatch(this._recordDetailActions.getRecordDetail(id));
				this._store.dispatch(this._commentsActions.loadComments(id));
			})
	}
	
	addComment() {
		this.selectedRecord.subscribe(rec => this._selectedRecordId = rec.id);
		let newComment = new RecordComment(null, this._selectedRecordId, this.newCommentText, null);
		console.log(newComment);
		this._store.dispatch(this._commentsActions.saveComment(newComment));
	}
}