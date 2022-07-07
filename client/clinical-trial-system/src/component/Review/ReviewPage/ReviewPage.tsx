import {Main} from "../../Main/Main";
import {Box, Chip, Container, Grid, Skeleton} from "@mui/material";
import DrawerHeader from "../../Drawer/DrawerHeader";
import * as React from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../store";
import {useEffect} from "react";
import {DrawerAction} from "../../Drawer/DrawerReducer";
import {ProjectAction} from "../../AppBar/Project/ProjectReducer";
import ReviewInputBox from "./ReviewInputBox";
import ReviewInfoBox from "./ReviewInfoBox";

const ReviewPage = () => {
    const dispatch = useDispatch();
    const drawerOpen = useSelector((state: RootState) => state.DrawerReducer.drawerOpen);

    useEffect(() => {
        dispatch(DrawerAction.dontDisplayMenuButton());
        dispatch(ProjectAction.doNotDisplaySelectProject());
    });

    return (
        <Main open={drawerOpen}>
            <Container maxWidth="xl">
                <DrawerHeader/>
                <Grid container spacing={3} sx={{my: 2}}>
                    <Grid item container direction="column" xs spacing={3}>
                        <Grid item>
                            <ReviewInfoBox/>
                        </Grid>
                        <Grid item container spacing={3}>
                            <Grid item xs direction="row">
                                <Skeleton variant="rectangular" height={400}/>
                                <Box sx={{display: 'flex', justifyContent: 'center', mt: 1}}>
                                    <Chip label="Original Image" sx={{width: '100%'}}/>
                                </Box>
                            </Grid>
                            <Grid item xs direction="row">
                                <Skeleton variant="rectangular" height={400}/>
                                <Box sx={{display: 'flex', justifyContent: 'center', mt: 1}}>
                                    <Chip label="ML Result Image" sx={{width: '100%'}}/>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={2}>
                        <ReviewInputBox/>
                    </Grid>
                </Grid>
            </Container>
        </Main>
    );
};

export default ReviewPage;