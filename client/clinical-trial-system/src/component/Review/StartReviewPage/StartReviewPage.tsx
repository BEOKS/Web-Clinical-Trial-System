import * as React from "react";
import DrawerHeader from "../../Drawer/DrawerHeader";
import {Alert, AlertTitle, Box, Button, Container, Grid, Typography} from "@mui/material";
import {Main} from "../../Main/Main";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../store";
import {useEffect} from "react";
import {DrawerAction} from "../../Drawer/DrawerReducer";
import {ProjectAction} from "../../AppBar/Project/ProjectReducer";
import StartReviewDialog from "./StartReviewDialog";
import {ReviewerAction} from "../ReviewerReducer";
import ReviewerInfoInput from "./ReviewerInfoInput";

const StartReviewPage = () => {
    const dispatch = useDispatch();
    const drawerOpen = useSelector((state: RootState) => state.DrawerReducer.drawerOpen);
    const agreeReview = useSelector((state: RootState) => state.ReviewerReducer.agreeReview);

    useEffect(() => {
        dispatch(DrawerAction.dontDisplayMenuButton());
        dispatch(ProjectAction.doNotDisplaySelectProject());
    });

    const handleClickStartReview = () => {
        dispatch(ReviewerAction.openStartReviewDialog());
    };

    return (
        <Main open={drawerOpen}>
            <Container maxWidth="lg">
                <DrawerHeader/>
                <Box sx={{backgroundColor: 'secondary.light', p: 3, mt: 4}}
                     border={1} borderRadius={1} borderColor="primary.main">
                    <Typography variant="h2" align="center" color="primary.dark">CadAI-B<sup>TM</sup></Typography>
                    <Typography variant="h4" align="center" color="primary.dark">
                        Real-time Ultrasonic Cancer Diagnosis Solution
                    </Typography>
                </Box>
                <Grid container sx={{mt: 3}} columnSpacing={3}>
                    <Grid item xs>
                        <Alert variant="outlined" severity="info">
                            <AlertTitle>1. Info Title</AlertTitle>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                            galley of type and scrambled it to make a type specimen book.
                            <br/><br/>
                            <AlertTitle>2. Info Title</AlertTitle>
                            It has survived not only five centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged. It was popularised in the 1960s with the release of
                            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                            software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Alert>
                    </Grid>
                    <Grid item xs={4}>
                        <ReviewerInfoInput/>
                    </Grid>
                </Grid>
                <Box sx={{display: 'flex', justifyContent: 'center', mt: 6}}>
                    <Button variant="contained" sx={{px: 10, py: 2}}
                            onClick={handleClickStartReview}
                            disabled={!agreeReview}>Start Review</Button>
                </Box>
            </Container>
            <StartReviewDialog/>
        </Main>
    );
};

export default StartReviewPage;