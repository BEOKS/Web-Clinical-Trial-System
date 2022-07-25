import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";
import * as React from "react";
import {useDispatch, useSelector} from "react-redux";
import {ReviewerAction} from "../ReviewerReducer";
import {RootState} from "../../../store";
import {useNavigate} from "react-router-dom";

/**
 * 리뷰 종료 의사를 묻는 다이얼로그입니다.
 * 확인 버튼 클릭 시 세션 종료 페이지로 이동합니다.
 * 또한, N번째 문제에서 나가기 버튼으로 리뷰를 종료했다면 N-1개의 문제를 푼 것이므로
 * 세션 종료 페이지에서 푼 문제의 개수를 올바르게 출력하기 위해
 * [currentImageNumber]{@link RootState.ReviewerReducer.currentImageNumber}를 1만큼 감소시킵니다.
 * @author 김도희 <doheedev@gmail.com>
 */
const ExitReviewDialog = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const exitReviewDialogOpen = useSelector((state: RootState) => state.ReviewerReducer.exitReviewDialogOpen);
    const currentImageNumber = useSelector((state: RootState) => state.ReviewerReducer.currentImageNumber);

    const handleClose = () => {
        dispatch(ReviewerAction.closeExitReviewDialog());
    };

    const handleClickOKButton = () => {
        const imageNumber = currentImageNumber === 0 ? 0 : currentImageNumber - 1;
        dispatch(ReviewerAction.setCurrentImageNumber(imageNumber));
        navigate('/close-session');
        handleClose();
    };

    return (
        <Dialog
            open={exitReviewDialogOpen}
            onClose={handleClose}
            aria-labelledby="exit-review-dialog-title"
            aria-describedby="exit-review-dialog-description"
        >
            <DialogTitle id="exit-review-dialog-title">
                {"Exit review?"}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="exit-review-dialog-description">
                    Please click the OK button to exit the review.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleClickOKButton} autoFocus>
                    OK
                </Button>
            </DialogActions>
        </Dialog>
    )
};

export default ExitReviewDialog;