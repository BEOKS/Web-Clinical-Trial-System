import * as React from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from '@mui/material';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store";
import {ReviewerAction} from "./ReviewerReducer";
import {useNavigate} from "react-router-dom";

const StartReviewDialog = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const startReviewDialogOpen = useSelector((state: RootState) => state.ReviewerReducer.startReviewDialogOpen);
    const reviewerCount = useSelector((state: RootState) => state.ReviewerReducer.reviewerCount);

    const handleClickOKButton = () =>{
        navigate('/review');
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
                    <strong>Your test number is {reviewerCount}.</strong> Please click the OK button to start the
                    review.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleClickOKButton} autoFocus>
                    OK
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default StartReviewDialog;