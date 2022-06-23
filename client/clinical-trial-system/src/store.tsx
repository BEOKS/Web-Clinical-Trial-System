import {combineReducers} from "redux";
import DrawerReducer from "./component/Drawer/DrawerReducer";

const rootReducer = combineReducers({
    DrawerReducer,
})

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;