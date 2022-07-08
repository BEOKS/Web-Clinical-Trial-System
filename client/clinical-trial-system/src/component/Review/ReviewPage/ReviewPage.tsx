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
import {REVIEW_STEP} from "../ReviewerReducer";

const ReviewPage = () => {
    const dispatch = useDispatch();
    const drawerOpen = useSelector((state: RootState) => state.DrawerReducer.drawerOpen);
    const currentImageNumber = useSelector((state: RootState) => state.ReviewerReducer.currentImageNumber);
    const reviewStep = useSelector((state: RootState) => state.ReviewerReducer.reviewStep);

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
                            <Grid item xs>
                                {/*<Skeleton variant="rectangular" height={400}/>*/}
                                <img src={`/api/review/data/${currentImageNumber}/originalImage`} alt="Original Data"
                                     width={'100%'}/>
                                <Box sx={{display: 'flex', justifyContent: 'center', mt: 1}}>
                                    <Chip label="Original Image" sx={{width: '100%'}}/>
                                </Box>
                            </Grid>
                            <Grid item xs>
                                {reviewStep === REVIEW_STEP.REVIEW ?
                                    <Skeleton variant="rectangular" height={430}/> :
                                    <img src={`/api/review/data/${currentImageNumber}/mlResultImage`}
                                         alt="ML Result Data"
                                         width={'100%'}/>
                                }
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