import {NgModule} from "@angular/core";
import {StoreModule} from "@ngrx/store";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {StoreLogMonitorModule, useLogMonitor} from "@ngrx/store-log-monitor";
import {records} from "../stores/reduces/records.reducer";
import {recordComments} from "../stores/reduces/record-comments.reducer";

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
	
}