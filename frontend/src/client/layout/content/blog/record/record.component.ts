import {Component, Input} from "@angular/core";
import {Record} from "../../../../model/record.model";
import {Router} from "@angular/router";

@Component({
	selector: 'div.h2d-record',
	templateUrl: './record.component.html',
	styleUrls: ['./record.component.scss']
})
export class RecordComponent {
	@Input() record: Record;
	
	constructor(
		private _router: Router
	) {
		
	}
	
	openRecord() {
		this._router.navigate(['/record', this.record.id])
	}
}