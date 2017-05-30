import {Routes, RouterModule} from "@angular/router";
import {BlogComponent} from "./blog.component";
import {NgModule} from "@angular/core";
import {RecordDetailsComponent} from "./record/record-details.component";
import {NewRecordComponent} from "./newrecord/new-record.component";
import {AuthGuard} from "../../../guards/auth.guard";

const blogRoutes: Routes = [
	{ path: 'blog', component: BlogComponent },
	{ path: 'record/:id', component: RecordDetailsComponent },
	{ path: 'new', component: NewRecordComponent, canActivate: [AuthGuard] }
];

@NgModule({
	imports: [RouterModule.forChild(blogRoutes)],
	exports: [RouterModule]
})
export class BlogRoutingModule {
	
}