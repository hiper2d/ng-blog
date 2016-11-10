import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {layoutRoutes} from "./layout.router";
import {BlogComponent} from "./content/blog/blog.component";
import {AboutComponent} from "./content/about/about.component";
import {LayoutConponent} from "./layout.component";
import {BlogService} from "../services/blog.service";
import {HttpModule} from "@angular/http";
import {RecordComponent} from "./content/blog/record/record.component";

@NgModule({
	imports: [
		BrowserModule,
		HttpModule,
		RouterModule.forRoot(layoutRoutes),
	],
	declarations: [
		AboutComponent,
		BlogComponent,
		LayoutConponent,
		RecordComponent
	],
	providers: [
		BlogService
	],
	bootstrap: [LayoutConponent]
})
export class LayoutModule {
	
}