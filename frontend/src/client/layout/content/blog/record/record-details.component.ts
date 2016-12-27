import {Component, OnInit, ViewEncapsulation, ViewChild, ElementRef} from "@angular/core";
import {ActivatedRoute, Params} from "@angular/router";
import {Record} from "../../../../model/record.model";
import {Observable} from "rxjs";
import {RecordComment} from "../../../../model/comment.model";
import {Store} from "@ngrx/store";
import {AppStore} from "../../../../store/app.store";
import {RecordDetailsActions} from "../../../../store/actions/record-details.action";
import {CommentsActions} from "../../../../store/actions/comments.actions";
import {RecordDetailsState} from "../../../../store/reduces/record-details.reducer";
import {RecordCommentsState} from "../../../../store/reduces/comments.reducer";

@Component({
	selector: '.h2d-record-details',
	templateUrl: './record-details.component.html',
	styleUrls: ['./record-details.component.scss'],
	encapsulation: ViewEncapsulation.None //todo: try to avoid this, start reading from here http://stackoverflow.com/questions/36265026/angular-2-innerhtml-styling
})
export class RecordDetailsComponent implements OnInit {
	@ViewChild('article')
	articleContainer: ElementRef;
	selectedRecord: Observable<Record>;
	comments: Observable<Array<RecordComment>>;
	newCommentText: string;

	constructor(
		private _activatedRoute: ActivatedRoute,
		private _store: Store<AppStore>,
		private _recordDetailActions: RecordDetailsActions,
		private _commentsActions: CommentsActions
	) {
		this.comments = _store.select<RecordCommentsState>('recordComments');
		this.selectedRecord = _store.select<RecordDetailsState>('recordDetails');
	}
	
	ngOnInit() {
		this._activatedRoute.params
			.map((params: Params) => params['id'])
			.filter(id => id)
			.subscribe(id => {
				this._store.dispatch(this._recordDetailActions.getRecordDetail(id));
				this._store.dispatch(this._commentsActions.loadComments(id));
			});
		this.selectedRecord.subscribe(rec => {
			this.articleContainer.nativeElement.innerHTML = rec.content; //todo: is it ok to use nativeElement?
		})
	}
	
	addComment() {
		this.selectedRecord.subscribe(rec => {
			let newComment = new RecordComment(null, rec.id, this.newCommentText, null);
			this._store.dispatch(this._commentsActions.addComment(newComment));
		});
		this.newCommentText = '';
	}
}