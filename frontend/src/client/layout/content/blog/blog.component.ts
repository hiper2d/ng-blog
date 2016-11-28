import {Component, OnInit} from "@angular/core";
import {BlogService} from "../../../services/blog.service";
import {Record} from "../../../model/record.model";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {RecordStore} from "../../../stores/record.store";
import {Store} from "@ngrx/store";

@Component({
	selector: 'div.h2d-blog',
	templateUrl: './blog.component.html',
	styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
	records: Observable<Array<Record>>;
	
	constructor(
		private _blogService: BlogService,
		private _store: Store<RecordStore>
	) {
		this.records = _store.select<Array<Record>>('records');
	}
	
	ngOnInit(): void {
		this._blogService.loadRecords();
	}
	
	createRecord() {
		this._blogService.saveRecord({
			id: null,
			title: "Awesome article number one hundred",
			content: "Когда я впервые увидел его файл конфигурации, он показался мне крайне странным и путанным. Но спустя некоторое время я понял, что всё дело в уникальном синтаксисе Webpack и несколько иной философии, которая может поначалу немного сбить с толку. Но, с другой стороны, именно эта новая философия и делает Webpack таким популярным. Философия Webpack Можно выделить 2 основных принципа философии Webpack: Что угодно может быть модулем. Модулями могут быть как JS-файлы, так и CSS-файлы, HTML-файлы или изображения. То есть можно использовать и require(“myJSfile.js”), и require(“myCSSfile.css”). Таким образом, вы можете разбивать любой артефакт на меньшие удобоуправляемые части, использовать их повторно и так далее. Загружайте только то, что вам нужно и когда вам нужно. Обычно сборщики модулей берут все модули и генерируют из них один большой файл bundle.js. Но во многих приложениях размер такого файла может достигать 10–15 MB – а это слишком много. Потому Webpack оснащен рядом функций, позволяющих делить код и генерировать множество bundle-файлов, а также асинхронно загружать необходимые части приложения тогда, когда это нужно. А теперь давайте наконец перейдем к особенностям Webpack.",
			color: "#ffb819"
		});
	}
}