import {Routes, RouterModule} from "@angular/router";
import {BlogComponent} from "./content/blog/blog.component";
import {NgModule} from "@angular/core";
import {LoginComponent} from "./content/login/login.component";

const layoutRoutes: Routes = [
	{path: '', component: BlogComponent},
	{path: 'login', component: LoginComponent}
];

@NgModule({
	imports: [RouterModule.forRoot(layoutRoutes)],
	exports: [RouterModule]
})
export class LayoutRoutingModule {
	
}
