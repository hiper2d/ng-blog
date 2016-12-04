import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {LayoutRoutingModule} from "./layout-routing.module";
import {LayoutComponent} from "./layout.component";
import {HttpModule} from "@angular/http";
import {BlogModule} from "./content/blog/blog.module";
import {AboutModule} from "./content/about/about.module";
import {LayoutNgRxModule} from "./layout-ngrx.module";
import {AuthService} from "../services/auth.service";
import {AuthGuard} from "../guards/auth.guard";
import {LoginComponent} from "./content/login/login.component";
import {NewRecordComponent} from "./content/admin/newrecord/new-record.component";

@NgModule({
	imports: [
		AboutModule,
		BlogModule,
		BrowserModule,
		HttpModule,
		LayoutNgRxModule,
		LayoutRoutingModule
	],
	declarations: [
		LayoutComponent,
		LoginComponent,
		NewRecordComponent
	],
	providers: [
		AuthGuard,
		AuthService
	],
	bootstrap: [LayoutComponent]
})
export class LayoutModule {
	
}