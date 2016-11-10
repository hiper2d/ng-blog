import {Component, Input} from "@angular/core";
import {Record} from "../../../../model/record.model";

@Component({
	selector: 'h2d-record',
	templateUrl: './record.component.html',
	styleUrls: ['./record.component.scss']
})
export class RecordComponent {
	@Input() record: Record;
}