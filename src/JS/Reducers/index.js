// importation
import { combineReducers} from "redux";
import eventReducer from "./RedEvent";
import userReducer from "./RedUsers";

// create rootReducer
const rootReducer = combineReducers({eventReducer, userReducer});


// export
export default rootReducer;