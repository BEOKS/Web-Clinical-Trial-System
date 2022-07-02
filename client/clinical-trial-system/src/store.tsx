import {combineReducers} from "redux";
import DrawerReducer from "./component/Drawer/DrawerReducer";
import LoginReducer from "./component/Login/LoginReducer";

const rootReducer = combineReducers({
    DrawerReducer,
    LoginReducer,
})

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;