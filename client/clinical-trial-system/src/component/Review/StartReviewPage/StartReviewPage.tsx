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

const START_REVIEW_TITLE_MESSAGE = <>CadAI-B<sup>TM</sup></>;
const START_REVIEW_SUBTITLE_MESSAGE = <>Real-time Ultrasonic Cancer Diagnosis Solution</>;
const FIRST_INFO_TITLE_MESSAGE = <>1. Info Title</>;
const FIRST_INFO_CONTENT_MESSAGE =
    <>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
        galley of type and scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
        passages, and more recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum.</>;
const SECOND_INFO_TITLE_MESSAGE = <>2. Info Title</>;
const SECOND_INFO_CONTENT_MESSAGE =
    <>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece
        of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
        a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the
        word in classical literature, discovered the undoubtable source.</>;

const StartReviewTitle = () => {
    return (
        <Box sx={{backgroundColor: 'secondary.light', p: 3, mt: 4}}
             border={1} borderRadius={1} borderColor="primary.main">
            <Typography variant="h2" align="center" color="primary.dark">
                {START_REVIEW_TITLE_MESSAGE}
            </Typography>
            <Typography variant="h4" align="center" color="primary.dark">
                {START_REVIEW_SUBTITLE_MESSAGE}
            </Typography>
        </Box>
    )
};

const StartReviewInfoAlert = () => {
    return (
        <Alert variant="outlined" severity="info">
            <AlertTitle>{FIRST_INFO_TITLE_MESSAGE}</AlertTitle>
            {FIRST_INFO_CONTENT_MESSAGE}<br/><br/>
            <AlertTitle>{SECOND_INFO_TITLE_MESSAGE}</AlertTitle>
            {SECOND_INFO_CONTENT_MESSAGE}
        </Alert>
    )
};

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
                <StartReviewTitle/>
                <Grid container sx={{mt: 3}} direction={{xs: 'column', md: 'row'}} columnSpacing={3}>
                    <Grid item xs md sx={{display: 'flex'}}>
                        <StartReviewInfoAlert/>
                    </Grid>
                    <Grid item xs md={4} sx={{display: 'flex', mt: {xs: 3, md: 0}}}>
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