import {Container, Box} from "@mui/material";
import LoginWithEmail from "./LoginWithEmail";
import LoginWithSNS from "./LoginWithSNS";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {DrawerAction} from "../Drawer/DrawerReducer";
import DrawerHeader from "../Drawer/DrawerHeader";
import * as React from "react";
import {Main} from "../Main/Main";
import {ProjectAction} from "../AppBar/Project/ProjectReducer";

/**
 * 로그인 컴포넌트입니다.
 * 이메일 로그인 섹션과 SNS 로그인 섹션으로 구성되며,
 * 모든 구성요소를 아우르는 박스의 너비는 Container의 최대 너비에 따라 결정됩니다.
 * @see {@link https://mui.com/material-ui/api/container/}
 * @author 김도희 <doheedev@gmail.com>
 */
export default function Login() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(DrawerAction.dontDisplayMenuButton());
        dispatch(ProjectAction.doNotDisplaySelectProject());
    });

    return (
        <Main>
            <Container maxWidth="sm">
                <DrawerHeader/>
                <Box my={7} p={8} sx={{border: 1, borderRadius: 1, borderColor: 'primary.main'}}>
                    <LoginWithEmail/>
                    <LoginWithSNS/>
                </Box>
            </Container>
        </Main>
    );
}