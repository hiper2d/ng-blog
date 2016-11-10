import {Component, OnInit} from "@angular/core";
import {BlogService} from "../../../services/blog.service";
import {Record} from "../../../model/record.model";

@Component({
	selector: 'h2d-blog',
	templateUrl: './blog.component.html',
	styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
	records: Array<Record>;
	
	constructor(private _blogService: BlogService) {
	}
	
	ngOnInit(): void {
		this._blogService.loadRecords();
		this._blogService.records.subscribe(records => this.records = records);
	}
}