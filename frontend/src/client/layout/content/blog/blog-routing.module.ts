import {Routes, RouterModule} from "@angular/router";
import {BlogComponent} from "./blog.component";
import {NgModule} from "@angular/core";
import {RecordDetailsComponent} from "./record/record-details.component";

const blogRoutes: Routes = [
	{path: 'blog', component: BlogComponent},
	{path: 'selectedRecord/:id', component: RecordDetailsComponent}
]

@NgModule({
	imports: [RouterModule.forChild(blogRoutes)],
	exports: [RouterModule]
})
export class BlogRoutingModule {
	
}