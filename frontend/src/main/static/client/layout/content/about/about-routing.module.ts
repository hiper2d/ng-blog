import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {AboutComponent} from "./about.component";

const aboutRoutes: Routes = [
	{path: 'about', component: AboutComponent}
]

@NgModule({
	imports: [RouterModule.forChild(aboutRoutes)],
	exports: [RouterModule]
})
export class AboutRoutingModule {
	
}