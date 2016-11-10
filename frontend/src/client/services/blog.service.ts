import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs";
import {Record} from "../model/record.model";

@Injectable()
export class BlogService {
	private _records: Observable<Array<Record>>;
	private JSON_SERVER = "http://localhost:3002";
	private SPRING_SERVER: "http://localhost:9001/api/blog";
	
	constructor(private _http: Http) {
	}
	
	loadRecords() {
		this._records = this._http.get("http://localhost:3002/blog").map(res => <Array<Record>> res.json());
	}
	
	get records(): Observable<Array<Record>> {
		return this._records;
	}
}