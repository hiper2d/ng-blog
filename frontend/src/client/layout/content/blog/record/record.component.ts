import {Component, Input} from "@angular/core";
import {Record} from "../../../../model/record.model";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {AppStore} from "../../../../store/app.store";
import {RecordDetailsActions} from "../../../../store/actions/record-details.action";

@Component({
	selector: 'div.h2d-record',
	templateUrl: './record.component.html',
	styleUrls: ['./record.component.scss']
})
export class RecordComponent {
	@Input() record: Record;
	
	constructor(
		private _router: Router,
		private _store: Store<AppStore>,
	  private _recordDetailsActions: RecordDetailsActions
	) { }
	
	openRecord() {
		let recordId = this.record.id;
		this._store.dispatch(this._recordDetailsActions.getRecordDetail(recordId));
		this._router.navigate(['/record', recordId]);
	}
}