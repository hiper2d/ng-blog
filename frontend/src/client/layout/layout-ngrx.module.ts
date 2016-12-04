import {NgModule} from "@angular/core";
import {StoreModule} from "@ngrx/store";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {StoreLogMonitorModule, useLogMonitor} from "@ngrx/store-log-monitor";
import {records} from "../store/reduces/records.reducer";
import {recordComments} from "../store/reduces/record-comments.reducer";

@NgModule({
	imports: [
		StoreModule.provideStore({records, recordComments}),
		StoreDevtoolsModule.instrumentStore({
			monitor: useLogMonitor({
				visible: true,
				position: 'right'
			})
		}),
		StoreLogMonitorModule
	],
	exports: [
		StoreModule,
		StoreDevtoolsModule,
		StoreLogMonitorModule
	]
})
export class LayoutNgRxModule {
	// Awesome NgRx article to show reducers with services combo: http://bodiddlie.github.io/ng-2-toh-with-ngrx-suite
	// And quite full NgRx tutorial: https://gist.github.com/btroncone/a6e4347326749f938510
}