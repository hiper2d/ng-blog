import {NgModule} from "@angular/core";
import {AboutRoutingModule} from "./about-routing.module";
import {AboutComponent} from "./about.component";
import {CommonModule} from "@angular/common";

@NgModule({
	imports: [
		AboutRoutingModule,
		CommonModule
	],
	declarations: [
		AboutComponent
	]
})
export class AboutModule {
	
}