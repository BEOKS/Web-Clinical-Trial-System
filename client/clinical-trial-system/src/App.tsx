import Page from "./Page";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import RoleSelection from "./component/RoleSelection/RoleSelection";
import {ThemeProvider} from '@mui/material';
import theme from "./theme/theme";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Page/>}></Route>
                    <Route path="/select-role" element={<RoleSelection/>}></Route>
                    {/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는 경우 처리 */}
                    <Route path="*" element={<Page/>}></Route>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default App
