import {Routes, RouterModule} from "@angular/router";
import {BlogComponent} from "./content/blog/blog.component";
import {NgModule} from "@angular/core";

const layoutRoutes: Routes = [
	{path: '', component: BlogComponent}
];

@NgModule({
	imports: [RouterModule.forRoot(layoutRoutes)],
	exports: [RouterModule]
})
export class LayoutRoutingModule {
	
}
