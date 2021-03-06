//import {authReducer} from './authReducer'
import { combineReducers } from "redux";
import { samplelist } from "./samplelist";


const rootReducer = combineReducers({
  samplelist
});

export default rootReducer;
