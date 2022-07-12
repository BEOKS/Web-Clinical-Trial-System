import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";
import * as React from "react";
import {useDispatch, useSelector} from "react-redux";
import {ReviewerAction} from "../ReviewerReducer";
import {RootState} from "../../../store";
import {useNavigate} from "react-router-dom";

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