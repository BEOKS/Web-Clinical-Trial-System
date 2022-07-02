import {combineReducers} from "redux";
import DrawerReducer from "./component/Drawer/DrawerReducer";
import LoginReducer from "./component/Login/LoginReducer";
import ProjectReducer from "./component/AppBar/Project/ProjectReducer";

const rootReducer = combineReducers({
    DrawerReducer,
    LoginReducer,
    ProjectReducer,
})

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;