import {NgModule} from "@angular/core";
import {BlogRoutingModule} from "./blog-routing.module";
import {BlogComponent} from "./blog.component";
import {RecordComponent} from "./record/record.component";
import {BlogService} from "../../../services/blog.service";
import {CommonModule} from "@angular/common";
import {RecordDetailsComponent} from "./record/record-details.component";
import {CommentService} from "../../../services/comment.service";
import {FormsModule} from "@angular/forms";

@NgModule({
	imports: [
		BlogRoutingModule,
		CommonModule,
		FormsModule
	],
	declarations: [
		BlogComponent,
		RecordComponent,
		RecordDetailsComponent
	],
	providers: [
		BlogService,
		CommentService
	]
})
export class BlogModule {
	
}