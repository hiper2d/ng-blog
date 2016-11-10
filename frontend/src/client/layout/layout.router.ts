import {Routes} from "@angular/router";
import {BlogComponent} from "./content/blog/blog.component";
import {AboutComponent} from "./content/about/about.component";

export const layoutRoutes: Routes = [
	{path: '', component: BlogComponent},
	{path: 'blog', component: BlogComponent},
	{path: 'about', component: AboutComponent}
];