import PIPage from "./component/Main/PIPage";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import RoleSelection from "./component/RoleSelection/RoleSelection";
import {Box, ThemeProvider} from '@mui/material';
import theme from "./theme/theme";
import AppBar from "./component/AppBar/AppBar";
import Drawer from "./component/Drawer/Drawer";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Login from "./component/Login/Login";
import {UserState, checkLoginState} from "./Utils/Auth/Auth";
import {useState} from "react";
import LoadingPage from "./component/Login/Loading";
import ReviewerPage from "./component/Main/ReviewerPage";

const INIT_LOGIN_STATUS = 9999;

function App() {
    const [loginStatus, setLoginStatus] = useState(INIT_LOGIN_STATUS);

    if (loginStatus === INIT_LOGIN_STATUS) {
        checkLoginState(setLoginStatus);
        console.log('사용자 정보를 확인중입니다..');
    }

    return (
        <ThemeProvider theme={theme}>
            {loginStatus === INIT_LOGIN_STATUS ?
                <LoadingPage/> :
                <BrowserRouter>
                    <Box sx={{display: 'flex'}}>
                        <CssBaseline/>
                        <AppBar/>
                        <Drawer/>
                        <Routes>
                            {/*{loginStatus === UserState.NOT_LOGIN &&*/}
                            {/*    <Route path="/login" element={<Login/>}></Route>}*/}
                            {/*{loginStatus === UserState.NEW_USER &&*/}
                            {/*    <Route path="/select-role" element={<RoleSelection/>}></Route>}*/}
                            {/*{loginStatus === UserState.EXISTING_USER &&*/}
                            {/*    <Route path="/" element={<Page/>}></Route>}*/}

                            <Route path="/login" element={<Login/>}></Route>
                            <Route path="/pi" element={<PIPage/>}></Route>
                            <Route path="/reviewer" element={<ReviewerPage/>}></Route>
                            <Route path="/select-role" element={<RoleSelection/>}></Route>
                            {/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는 경우 처리 */}
                            <Route path="" element={<Login/>}></Route>
                        </Routes>
                    </Box>
                </BrowserRouter>
            }
        </ThemeProvider>
    );
}

export default App;
