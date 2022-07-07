import * as React from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from '@mui/material';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../store";
import {ReviewerAction} from "../ReviewerReducer";
import {useNavigate} from "react-router-dom";
import axios from "axios";

const StartReviewDialog = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const startReviewDialogOpen = useSelector((state: RootState) => state.ReviewerReducer.startReviewDialogOpen);

    const handleClickOKButton = () =>{
        navigate('/review');

        const url = '/api/reviewer';
        axios.post(url)
            .then(response=>{
                console.log(response);
                dispatch(ReviewerAction.setReviewerCount(response.data.reviewerId));
            }).catch(error=>{
                console.log(error);
        })
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