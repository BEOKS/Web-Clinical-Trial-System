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
import './ReviewPage.css'
interface IMAGE_INFO {
    type: string,
    label: string,
}

const IMAGE_OPTIONS: IMAGE_INFO[] = [
    {type: 'originalImage', label: 'Original Image'},
    {type: 'mlResultImage', label: 'ML Result Image'},
]

const ImageWithLabel = (props: { type: string, label: string }) => {
    const currentImageNumber = useSelector((state: RootState) => state.ReviewerReducer.currentImageNumber);
    const reviewStep = useSelector((state: RootState) => state.ReviewerReducer.reviewStep);

    return (
        <Grid item xs>
            {reviewStep === REVIEW_STEP.ORIGINAL && props.type === "mlResultImage" ?
                <Skeleton variant="rectangular">
                    <img src={`/api/review/data/${currentImageNumber}/${props.type}`} alt={props.label} width={'100%'}/>
                </Skeleton> :
                <img src={`/api/review/data/${currentImageNumber}/${props.type}`} alt={props.label} width={'100%'}/>
            }
            <Box sx={{display: 'flex', justifyContent: 'center', mt: 1}}>
                <Chip label={props.label} sx={{width: '100%'}}/>
            </Box>
        </Grid>
    )
};

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
                <Grid container direction={{xs: 'column', md: 'row'}} spacing={3} sx={{my: 2}}>
                    <Grid item container direction="column" xs md spacing={3}>
                        <Grid item>
                            <ReviewInfoBox/>
                        </Grid>
                        <Grid item container spacing={3}>
                            {IMAGE_OPTIONS.map(imageOption =>
                                <ImageWithLabel type={imageOption.type} label={imageOption.label}
                                                key={imageOption.type}/>)}
                        </Grid>
                    </Grid>
                    <Grid item xs md={2}>
                        <ReviewInputBox/>
                    </Grid>
                </Grid>
            </Container>
        </Main>
    );
};

export default ReviewPage;