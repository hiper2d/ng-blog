import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {LayoutRoutingModule} from "./layout-routing.module";
import {LayoutComponent} from "./layout.component";
import {HttpModule} from "@angular/http";
import {BlogModule} from "./content/blog/blog.module";
import {AboutModule} from "./content/about/about.module";
import {LayoutNgRxModule} from "./layout-ngrx.module";

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
		LayoutComponent
	],
	bootstrap: [LayoutComponent]
})
export class LayoutModule {
	
}