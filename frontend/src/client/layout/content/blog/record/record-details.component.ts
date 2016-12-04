import {Component, OnInit} from "@angular/core";
import {Router, ActivatedRoute, Params} from "@angular/router";
import {BlogService} from "../../../../services/blog.service";
import {Record} from "../../../../model/record.model";
import {CommentService} from "../../../../services/comment.service";
import {Observable} from "rxjs";
import {RecordComment} from "../../../../model/comment.model";
import {Store} from "@ngrx/store";
import {AppStore} from "../../../../store/app.store";

@Component({
	selector: 'div.h2d-record-details',
	templateUrl: './record-details.component.html',
	styleUrls: ['./record-details.component.scss']
})
export class RecordDetailsComponent implements OnInit {
	private selectedRecord: Record;
	private comments: Observable<Array<RecordComment>>;
	newCommentText: string;
	
	constructor(
		private _activatedRoute: ActivatedRoute,
		private _blogService: BlogService,
	  private _commentService: CommentService,
		private _store: Store<AppStore>
	) {
		this.comments = _store.select<Array<RecordComment>>('recordComments');
		//this._comments.subscribe(a => {});
	}
	
	ngOnInit() {
		this._activatedRoute.params
			.switchMap((params: Params) => this._blogService.getRecord(params['id']))
			.subscribe((rec: Record) => {
				this.selectedRecord = rec;
				this._commentService.loadComments(rec.id);
			});
	}
	
	addComment() {
		this._commentService.saveComment({id: null, recordId: this.selectedRecord.id, text: this.newCommentText});
	}
}