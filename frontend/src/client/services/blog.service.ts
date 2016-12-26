import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import {Record} from "../model/record.model";
import {AppStore} from "../store/app.store";
import {Store} from "@ngrx/store";
import {RecordsState} from "../store/reduces/records.reducer";
import {RecordsActions} from "../store/actions/records.actions";
import {RecordDetailState} from "../store/reduces/record-details.reducer";

@Injectable()
export class BlogService {
	static JSON_SERVER = "http://localhost:3002/blog";
	static SPRING_SERVER = "http://localhost:9001/api/blog";

	records: Observable<RecordsState>;

	constructor(
		private _http: Http,
		private _store: Store<AppStore>,
	) {
		this.records = _store.select<RecordsState>('records');
	}
	
	loadRecords(): Observable<RecordsState> {
		return this._http.get(BlogService.SPRING_SERVER).map(res => <Array<Record>>res.json());
	}

	getRecord(recordId: string): Observable<RecordDetailState> {
		return this._http.get(BlogService.SPRING_SERVER + "/" + recordId).map(res => <Record>res.json());
	}

	addRecord(record: Record): Observable<RecordDetailState> {
		return this._http.post(BlogService.SPRING_SERVER, record).map(res => <Record>res.json());
	}
}