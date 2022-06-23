import Page from "./Page";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import RoleSelection from "./component/RoleSelection/RoleSelection";
import {Box, ThemeProvider} from '@mui/material';
import theme from "./theme/theme";
import AppBar from "./component/AppBar/AppBar";
import Drawer from "./component/Drawer/Drawer";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Login from "./component/Login/Login";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Box sx={{display: 'flex'}}>
                    <CssBaseline/>
                    <AppBar/>
                    <Drawer/>
                    <Routes>
                        <Route path="/" element={<Page/>}></Route>
                        <Route path="/select-role" element={<RoleSelection/>}></Route>
                        <Route path="/login" element={<Login/>}></Route>
                        {/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는 경우 처리 */}
                        <Route path="*" element={<Page/>}></Route>
                    </Routes>
                </Box>
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default App
