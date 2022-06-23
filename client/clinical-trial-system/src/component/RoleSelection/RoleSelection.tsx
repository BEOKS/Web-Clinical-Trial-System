import {Button, Container, Paper, Stack, Typography} from "@mui/material";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import {Main} from "../Main/Main";
import DrawerHeader from "../Drawer/DrawerHeader";
import * as React from "react";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {DrawerAction} from "../Drawer/DrawerReducer";

const RoleSelection = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(DrawerAction.dontDisplayMenuButton());
    });

    return (
        <Main>
            <Container maxWidth="md">
                <DrawerHeader/>
                <Paper variant="outlined" sx={{p: 5, my: 3}}>
                    <Stack spacing={2} sx={{display: 'flex', alignItems: 'center'}}>
                        <Typography variant="h4">Select User Type</Typography>
                        <Stack direction="row" spacing={4}>
                            <Button data-testid={'pi-button'} variant="contained" sx={{width: '300px', p: 5}}>
                                <Stack alignItems="center" spacing={3}>
                                    <AccountBoxIcon sx={{fontSize: 200}}/>
                                    <Typography data-testid={'pi-description'}>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                        Ipsum has
                                        been
                                        the industry's standard dummy text ever since the 1500s
                                    </Typography>
                                    <Typography variant="h4">
                                        PI
                                    </Typography>
                                </Stack>
                            </Button>
                            <Button data-testid={'reviewer-button'} variant="contained" sx={{width: '300px', p: 5}}>
                                <Stack alignItems="center" spacing={3}>
                                    <AccountBoxIcon sx={{fontSize: 200}}/>
                                    <Typography data-testid={'reviewer-description'}>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                        Ipsum has
                                        been
                                        the industry's standard dummy text ever since the 1500s
                                    </Typography>
                                    <Typography variant="h4">
                                        Reviewer
                                    </Typography>
                                </Stack>
                            </Button>
                        </Stack>
                    </Stack>
                </Paper>
            </Container>
        </Main>
    );
};
export default RoleSelection;