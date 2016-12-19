import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import {Record} from "../model/record.model";
import {AppStore} from "../store/app.store";
import {Store} from "@ngrx/store";
import {RecordsState} from "../store/reduces/records.reducer";
import {RecordsActions} from "../store/actions/records.actions";

@Injectable()
export class BlogService {
	records: Observable<RecordsState>;
	static JSON_SERVER = "http://localhost:3002";
	static SPRING_SERVER = "http://localhost:9001/api";
	
	constructor(
		private _http: Http,
		private _store: Store<AppStore>,
	  private _recordsActions: RecordsActions
	) {
		this.records = _store.select<RecordsState>('records');
	}
	
	loadRecords(): Observable<RecordsState> {
		return this._http.get(BlogService.SPRING_SERVER + "/blog").do(res => console.log(res)).catch(this.handleError).map(res => <Array<Record>> res.json());
	}
	
	getRecord(id: string): Observable<Record> {
		return this.records.switchMap(records => records.filter(rec => rec.id == id)).take(1).map(a => <Record> a);
	}
	
	saveRecord(record: Record) {
		(record.id !== null) ? this.updateRecord(record) : this.createRecord(record);
	}
	
	private updateRecord(record: Record) {
		//this._store.dispatch({type: RecordAction[RecordAction.UPDATE_RECORD], payload: record});
	}
	
	private createRecord(record: Record) {
		this._store.dispatch(this._recordsActions.addRecord(this.addUUID(record)));
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
	
	private handleError (error: Response | any) {
		// In a real world app, we might use a remote logging infrastructure
		let errMsg: string;
		if (error instanceof Response) {
			const body = error.json() || '';
			const err = body.error || JSON.stringify(body);
			errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
		} else {
			errMsg = error.message ? error.message : error.toString();
		}
		console.log(errMsg);
		return Observable.throw(errMsg);
	}
}