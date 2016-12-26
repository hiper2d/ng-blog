import {compose} from "@ngrx/core/compose";
import {combineReducers} from "@ngrx/store";
import recordsReducer, {RecordsState} from "./reduces/records.reducer";
import recordCommentsReducer, {RecordCommentsState} from "./reduces/comments.reducer";
import recordDetailReducer, {RecordDetailState} from "./reduces/record-details.reducer";
import newRecordReducer, {NewRecordState} from "./reduces/new-record.reducer";

export interface AppStore {
	records: RecordsState,
	newRecordState: NewRecordState,
	recordDetails: RecordDetailState,
	recordComments: RecordCommentsState
}

export default compose(combineReducers) ({ // does it make sense?
	records: recordsReducer,
	newRecord: newRecordReducer,
	recordDetails: recordDetailReducer,
	recordComments: recordCommentsReducer
});
// Read about compose: http://redux.js.org/docs/api/compose.html
// this is also useful: https://github.com/ngrx/ngrx.github.io/blob/master/store/recipes/reducers/reducer_composition.md