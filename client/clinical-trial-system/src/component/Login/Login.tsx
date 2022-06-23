import {Container, Box} from "@mui/material";
import LoginWithEmail from "./LoginWithEmail";
import LoginWithSNS from "./LoginWithSNS";
import axios from 'axios';
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {DrawerAction} from "../Drawer/DrawerReducer";
import DrawerHeader from "../Drawer/DrawerHeader";
import * as React from "react";
import {Main} from "../Main/Main";

export default function Login() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(DrawerAction.dontDisplayMenuButton());
    });

    return (
        <Main>
            <Container maxWidth="sm">
                <DrawerHeader/>
                <Box
                    my={7}
                    p={8}
                    sx={{border: 1, borderRadius: 1, borderColor: 'primary.main'}}>
                    <LoginWithEmail/>
                    <LoginWithSNS/>
                </Box>
            </Container>
        </Main>
    );
}