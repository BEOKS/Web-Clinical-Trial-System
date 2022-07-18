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