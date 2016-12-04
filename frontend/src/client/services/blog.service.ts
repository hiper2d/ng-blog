import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from 'rxjs';
import {Record} from "../model/record.model";
import {AppStore} from "../store/app.store";
import {Store} from "@ngrx/store";
import {RecordAction} from "../store/reduces/record.action";

@Injectable()
export class BlogService {
	records: Observable<Array<Record>>;
	private JSON_SERVER = "http://localhost:3002";
	private SPRING_SERVER: "http://localhost:9001/api/blog";
	
	constructor(private _http: Http, private _store: Store<AppStore>) {
		this.records = _store.select<Array<Record>>('records');
	}
	
	loadRecords() {
		this.records = this._http.get("http://localhost:3002/blog").map(res => <Array<Record>> res.json());
		this.records.subscribe(records => this._store.dispatch({type: RecordAction[RecordAction.ADD_RECORDS], payload: records}));
	}
	
	getRecord(id: string): Observable<Record> {
		return this.records.switchMap(records => records.filter(rec => rec.id == id)).take(1).map(a => <Record> a);
	}
	
	saveRecord(record: Record) {
		(record.id !== null) ? this.updateRecord(record) : this.createRecord(record);
	}
	
	private updateRecord(record: Record) {
		this._store.dispatch({type: RecordAction[RecordAction.UPDATE_RECORD], payload: record});
	}
	
	private createRecord(record: Record) {
		this._store.dispatch({type: RecordAction[RecordAction.CREATE_RECORD], payload: this.addUUID(record)});
	}
	
	private addUUID(record: Record): Record {
		return Object.assign({}, record, {id: this.generateUUID()});
	}
	
	private generateUUID(): string {
		return ('' + 1e7 + -1e3 + -4e3 + -8e3 + -1e11)
			.replace(/1|0/g, function() {
				return (0 | Math.random() * 16).toString(16);
			});
	};
}