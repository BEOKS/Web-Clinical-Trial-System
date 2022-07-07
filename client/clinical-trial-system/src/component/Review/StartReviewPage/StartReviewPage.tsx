import * as React from "react";
import DrawerHeader from "../../Drawer/DrawerHeader";
import {Alert, AlertTitle, Box, Button, Container, Typography} from "@mui/material";
import {Main} from "../../Main/Main";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../store";
import {useEffect} from "react";
import {DrawerAction} from "../../Drawer/DrawerReducer";
import {ProjectAction} from "../../AppBar/Project/ProjectReducer";
import StartReviewDialog from "./StartReviewDialog";
import {ReviewerAction} from "../ReviewerReducer";

const StartReviewPage = () => {
    const dispatch = useDispatch();
    const drawerOpen = useSelector((state: RootState) => state.DrawerReducer.drawerOpen);

    useEffect(() => {
        dispatch(DrawerAction.dontDisplayMenuButton());
        dispatch(ProjectAction.doNotDisplaySelectProject());
    });

    const handleClickStartReview = () => {
        dispatch(ReviewerAction.openStartReviewDialog());
    };

    return (
        <Main open={drawerOpen}>
            <Container maxWidth="md">
                <DrawerHeader/>
                <Box sx={{backgroundColor: 'secondary.light', p: 3, mt: 4}}
                     border={1} borderRadius={1} borderColor="primary.main">
                    <Typography variant="h2" align="center" color="primary.dark">CadAI-B<sup>TM</sup></Typography>
                    <Typography variant="h4" align="center" color="primary.dark">
                        Real-time Ultrasonic Cancer Diagnosis Solution
                    </Typography>
                </Box>
                <Alert variant="outlined" severity="info" sx={{mt: 3}}>
                    <AlertTitle>1. Info Title</AlertTitle>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                    leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                    with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                    publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    <br/><br/>
                    <AlertTitle>2. Info Title</AlertTitle>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                    classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin
                    professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,
                    consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical
                    literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
                    of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This
                    book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of
                    Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                </Alert>
                <Box sx={{display: 'flex', justifyContent: 'center', mt: 6}}>
                    <Button variant="contained" sx={{px: 10, py: 2}}
                            onClick={handleClickStartReview}>Start Review</Button>
                </Box>
            </Container>
            <StartReviewDialog/>
        </Main>
    );
};

export default StartReviewPage;