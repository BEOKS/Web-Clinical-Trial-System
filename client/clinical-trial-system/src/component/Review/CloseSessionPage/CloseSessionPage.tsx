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

/**
 * 세션 종료 페이지입니다.
 * 'THANK YOU!' 문구와 함께 Alert 컴포넌트에서 리뷰한 이미지 개수를 알려주는 메세지를 출력합니다.
 * 리뷰 종료 버튼 클릭 시 리뷰 시작 페이지로 이동합니다.
 * (새로운 리뷰어의 리뷰 동의를 구하기 위해 [agreeReview]{@link RootState.ReviewerReducer.agreeReview}는 false로 초기화합니다.)
 * @author 김도희 <doheedev@gmail.com>
 */
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