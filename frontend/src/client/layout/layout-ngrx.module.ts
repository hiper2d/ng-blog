import {NgModule} from "@angular/core";
import {StoreModule} from "@ngrx/store";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {StoreLogMonitorModule, useLogMonitor} from "@ngrx/store-log-monitor";
import appStore from "../store/app.store";
import {RecordsActions} from "../store/actions/records.actions";
import {RecordDetailsActions} from "../store/actions/record-details.action";
import {CommentsActions} from "../store/actions/comments.actions";
import {RecordsEffect} from "../store/effects/records.effect";
import {EffectsModule} from "@ngrx/effects";

@NgModule({
	imports: [
		EffectsModule.run(RecordsEffect),
		StoreDevtoolsModule.instrumentStore({
			monitor: useLogMonitor({
				visible: true,
				position: 'right'
			})
		}),
		StoreLogMonitorModule,
		StoreModule.provideStore(appStore)
	],
	exports: [
		EffectsModule,
		StoreModule,
		StoreDevtoolsModule,
		StoreLogMonitorModule
	],
	providers: [
		CommentsActions,
		RecordsActions,
		RecordDetailsActions
	]
})
export class LayoutNgRxModule {
	// Awesome NgRx article to show reducers with services combo: http://bodiddlie.github.io/ng-2-toh-with-ngrx-suite
	// And quite full NgRx tutorial: https://gist.github.com/btroncone/a6e4347326749f938510
}