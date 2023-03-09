import {combineReducers} from "redux";
import * as photoReducer from './photo/photo.reducer'
import * as themReducer from './them/them.reducer'

export const rootReducer = combineReducers({
   [photoReducer.searchPhotosFeatureKeys] : photoReducer.reducer,
   [themReducer.themFeatureKey] : themReducer.reducer,
});
