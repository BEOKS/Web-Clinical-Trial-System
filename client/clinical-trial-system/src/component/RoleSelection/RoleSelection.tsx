import {Alert, AlertTitle, Box, Button, Container, Grid, Stack, Typography} from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {Main} from "../Main/Main";
import DrawerHeader from "../Drawer/DrawerHeader";
import * as React from "react";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {DrawerAction} from "../Drawer/DrawerReducer";
import "./RoleSelection.css";
import {useNavigate} from "react-router-dom";
import {ProjectAction} from "../AppBar/Project/ProjectReducer";

const RoleSelectionAlert = () => {
    return (
        <Alert variant="outlined" severity="info">
            <AlertTitle>Select your role</AlertTitle>
            Please select your role between PI or Reviewer.
        </Alert>
    )
}

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