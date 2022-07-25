import * as React from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from '@mui/material';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../store";
import {REVIEW_STEP, ReviewerAction} from "../ReviewerReducer";
import {useNavigate} from "react-router-dom";
import {assignReviewerNumber, getImageNumberList} from "../../../api/review";

/**
 * 리뷰 시작 페이지에서 리뷰 시작 버튼 클릭 시 나타나는 다이얼로그입니다.
 * 다이얼로그에서 확인 버튼을 클릭하면 {@link assignReviewerNumber}를 호출하여
 * 리뷰 시작 페이지에서 입력한 리뷰어 정보를 서버로 전송하고 리뷰어 번호를 할당받습니다.
 * {@link getImageNumberList}를 호출하여 리뷰할 이미지 번호 리스트를 수신 후 시간 측정을 시작합니다.
 * [reviewStep]{@link RootState.ReviewerReducer.reviewStep}은 {@link REVIEW_STEP.ORIGINAL}로 설정하며 영상 리뷰 페이지로 이동합니다.
 * @author 김도희 <doheedev@gmail.com>
 */
const StartReviewDialog = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const startReviewDialogOpen = useSelector((state: RootState) => state.ReviewerReducer.startReviewDialogOpen);
    const imageNumberList = useSelector((state: RootState) => state.ReviewerReducer.imageNumberList);
    const experienceYear = useSelector((state: RootState) => state.ReviewerReducer.experienceYear);
    const speciality = useSelector((state: RootState) => state.ReviewerReducer.speciality);
    const trainedOrDedicated = useSelector((state: RootState) => state.ReviewerReducer.trainedOrDedicated);

    const handleClickOKButton = () => {
        navigate('/review');
        assignReviewerNumber(experienceYear, speciality, trainedOrDedicated, reviewerCount => dispatch(ReviewerAction.setReviewerCount(reviewerCount)));
        getImageNumberList(imageNumberList => dispatch(ReviewerAction.setImageNumberList(imageNumberList)));
        if (imageNumberList.length > 0) {
            dispatch(ReviewerAction.setCurrentImageNumber(imageNumberList[0]));
        }
        dispatch(ReviewerAction.setStartTime(performance.now()));
        dispatch(ReviewerAction.setReviewStep(REVIEW_STEP.ORIGINAL));
        handleClose();
    };

    const handleClose = () => {
        dispatch(ReviewerAction.closeStartReviewDialog());
    };

    return (
        <Dialog
            open={startReviewDialogOpen}
            onClose={handleClose}
            aria-labelledby="start-review-dialog-title"
            aria-describedby="start-review-dialog-description"
        >
            <DialogTitle id="start-review-dialog-title">
                {"Start review?"}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="start-review-dialog-description">
                    Please click the OK button to start the review.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleClickOKButton} autoFocus>OK</Button>
            </DialogActions>
        </Dialog>
    );
};

export default StartReviewDialog;