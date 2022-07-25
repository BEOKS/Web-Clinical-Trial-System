/**
 * @author 김도희 <doheedev@gmail.com>
 */

import {Alert, AlertTitle, Box, Button, Container, Grid, Stack, Typography} from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {Main} from "../Main/Main";
import DrawerHeader from "../Drawer/DrawerHeader";
import * as React from "react";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {DrawerAction} from "../Drawer/DrawerReducer";
import {useNavigate} from "react-router-dom";
import {ProjectAction} from "../AppBar/Project/ProjectReducer";

/**
 * 역할 선택 안내 문구를 띄울 Alert 컴포넌트입니다.
 */
const RoleSelectionAlert = () => {
    return (
        <Alert variant="outlined" severity="info">
            <AlertTitle>Select your role</AlertTitle>
            Please select your role between PI or Reviewer.
        </Alert>
    )
}

/**
 * 아이콘과 역할 텍스트로 구성된 역할 선택 버튼입니다.
 * @param props.onClick - 버튼 클릭 시 실행되는 화살표 함수입니다.
 * @param props.message - 버튼에 보여지는 역할 텍스트입니다.
 */
const RoleButton = (props: { onClick: () => void, message: string }) => {
    return (
        <Button variant="contained"
                sx={{width: '100%', py: 5}}
                onClick={props.onClick}
                disableElevation>
            <Stack alignItems="center" spacing={3}>
                <AccountCircleIcon sx={{fontSize: 150}}/>
                <Typography variant="h4">{props.message}</Typography>
            </Stack>
        </Button>
    )
}

/**
 * 최초 로그인 시에만 보여지는 역할 선택 페이지입니다.
 * 간단한 안내 문구와 역할 선택 버튼으로 구성됩니다.
 * 버튼을 클릭하면 역할에 따라 적절한 페이지로 이동합니다.
 */
const RoleSelection = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(DrawerAction.dontDisplayMenuButton());
        dispatch(ProjectAction.doNotDisplaySelectProject());
    });

    const handleClickPIButton = () => {
        navigate("/pi");
    };

    const handleClickReviwerButton = () => {
        navigate("/start-review");
    };

    return (
        <Main>
            <Container maxWidth="sm">
                <DrawerHeader/>
                <Box sx={{p: 5, my: 4}} border={1} borderRadius={1} borderColor="secondary.dark">
                    <Grid container direction="column" spacing={3}>
                        <Grid item xs>
                            <RoleSelectionAlert/>
                        </Grid>
                        <Grid item xs container spacing={3}>
                            <Grid item xs>
                                <RoleButton onClick={handleClickPIButton} message="PI"/>
                            </Grid>
                            <Grid item xs>
                                <RoleButton onClick={handleClickReviwerButton} message="Reviewer"/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Main>
    );
};
export default RoleSelection;