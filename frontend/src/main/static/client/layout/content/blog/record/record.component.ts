import {Component, Input} from "@angular/core";
import {Record} from "../../../../model/record.model";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {AppStore} from "../../../../store/app.store";
import {RecordDetailsActions} from "../../../../store/actions/record-details.action";

@Component({
	selector: '.h2d-record',
	templateUrl: './record.component.html',
	styleUrls: ['./record.component.scss']
})
export class RecordComponent {
	@Input() record: Record;
	
	constructor(
		private _router: Router
	) { }
	
	openRecord() {
		let recordId = this.record.id;
		this._router.navigate(['/record', recordId]);
	}
}