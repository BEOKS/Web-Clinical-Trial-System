import * as React from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from '@mui/material';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../store";
import {ReviewerAction} from "../ReviewerReducer";
import {useNavigate} from "react-router-dom";
import {assignReviewerNumber, getImageNumberList} from "../../../api/review";

const StartReviewDialog = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const startReviewDialogOpen = useSelector((state: RootState) => state.ReviewerReducer.startReviewDialogOpen);
    const imageNumberList = useSelector((state: RootState) => state.ReviewerReducer.imageNumberList);

    const handleClickOKButton = () => {
        navigate('/review');
        assignReviewerNumber(reviewerCount => dispatch(ReviewerAction.setReviewerCount(reviewerCount)));
        getImageNumberList(imageNumberList => dispatch(ReviewerAction.setImageNumberList(imageNumberList)));
        if (imageNumberList.length > 0) {
            dispatch(ReviewerAction.setCurrentImageNumber(imageNumberList[0]));
        }
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
                <Button onClick={handleClickOKButton} autoFocus>
                    OK
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default StartReviewDialog;