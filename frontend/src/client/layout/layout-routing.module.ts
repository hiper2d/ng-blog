import {Routes, RouterModule} from "@angular/router";
import {BlogComponent} from "./content/blog/blog.component";
import {NgModule} from "@angular/core";
import {LoginComponent} from "./content/login/login.component";
import {AuthGuard} from "../guards/auth.guard";
import {NewRecordComponent} from "./content/admin/newrecord/new-record.component";

const layoutRoutes: Routes = [
	{path: '', component: BlogComponent},
	{path: 'login', component: LoginComponent},
	{path: 'new', component: NewRecordComponent, canActivate: [AuthGuard]}
];

@NgModule({
	imports: [RouterModule.forRoot(layoutRoutes)],
	exports: [RouterModule]
})
export class LayoutRoutingModule {
	
}
