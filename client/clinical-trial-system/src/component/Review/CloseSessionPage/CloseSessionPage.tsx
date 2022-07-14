import {Main} from "../../Main/Main";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../store";
import {useEffect} from "react";
import {DrawerAction} from "../../Drawer/DrawerReducer";
import {ProjectAction} from "../../AppBar/Project/ProjectReducer";
import {Alert, AlertTitle, Box, Button, Container, Typography} from "@mui/material";
import DrawerHeader from "../../Drawer/DrawerHeader";
import * as React from "react";
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import {useNavigate} from "react-router-dom";
import {ReviewerAction} from "../ReviewerReducer";

const CLOSE_SESSION_ALERT_TITLE_MESSAGE = <>This session has ended.</>;
const closeSessionAlertContentMessageWith = (currentImageNumber: number) =>
    <>You reviewed a total of <strong>{currentImageNumber} images.</strong> Thank you!<br/>
        Click the Finish Review button below to return to the Start Review page.</>;

const CloseSessionPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const drawerOpen = useSelector((state: RootState) => state.DrawerReducer.drawerOpen);
    const currentImageNumber = useSelector((state: RootState) => state.ReviewerReducer.currentImageNumber);

    useEffect(() => {
        dispatch(DrawerAction.dontDisplayMenuButton());
        dispatch(ProjectAction.doNotDisplaySelectProject());
    });

    const handleClickFinishReview = () => {
        dispatch(ReviewerAction.setAgreeReviewCheckbox(false));
        navigate('/start-review');
    };

    return (
        <Main open={drawerOpen}>
            <Container maxWidth="md">
                <DrawerHeader/>
                <Typography
                    variant="h1" align="center" mt={4} sx={{fontWeight: 700, letterSpacing: 13, fontStyle: 'italic'}}
                    color="secondary.dark">
                    THANK YOU!<span><AutoAwesomeIcon sx={{fontSize: 70}}/></span>
                </Typography>
                <Alert severity="success" sx={{mt: 3}}>
                    <AlertTitle>{CLOSE_SESSION_ALERT_TITLE_MESSAGE}</AlertTitle>
                    {closeSessionAlertContentMessageWith(currentImageNumber)}
                </Alert>
                <Box sx={{display: 'flex', justifyContent: 'center', mt: 6}}>
                    <Button variant="contained" sx={{px: 10, py: 2}}
                            onClick={handleClickFinishReview}>Finish Review</Button>
                </Box>
            </Container>
        </Main>
    )
};

export default CloseSessionPage;