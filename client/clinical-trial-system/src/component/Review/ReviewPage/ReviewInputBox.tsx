import {Box, Button, Stack} from "@mui/material";
import * as React from "react";
import {useDispatch, useSelector} from "react-redux";
import {REVIEW_STEP, ReviewerAction} from "../ReviewerReducer";
import {RootState} from "../../../store";
import {useNavigate} from "react-router-dom";
import BiRadsInput from "./ReviewInput/BiRadsInput";
import PomInput from "./ReviewInput/PomInput";
import ConfidenceInput from "./ReviewInput/ConfidenceInput";
import {saveMLReviewResult, saveOriginalReviewResult} from "../../../api/review";

const ReviewInputBox = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const reviewStep = useSelector((state: RootState) => state.ReviewerReducer.reviewStep);
    const currentImageNumber = useSelector((state: RootState) => state.ReviewerReducer.currentImageNumber);
    const imageNumberList = useSelector((state: RootState) => state.ReviewerReducer.imageNumberList);
    const startTime = useSelector((state: RootState) => state.ReviewerReducer.startTime);
    const biRads = useSelector((state: RootState) => state.ReviewerReducer.biRads);
    const pom = useSelector((state: RootState) => state.ReviewerReducer.pom);
    const reviewerId = useSelector((state: RootState) => state.ReviewerReducer.reviewerCount);
    const confidenceLevel = useSelector((state: RootState) => state.ReviewerReducer.confidenceLevel);
    const mlVerifyTime = useSelector((state: RootState) => state.ReviewerReducer.mlVerifyTime);

    const isLastImage = (): boolean => {
        return imageNumberList.length > 0 && currentImageNumber === imageNumberList[imageNumberList.length - 1];
    };

    const handleClickVerify = () => {
        const endTime = performance.now();
        const verifyTime = endTime - startTime;

        if (reviewStep === REVIEW_STEP.ORIGINAL) {
            saveOriginalReviewResult(biRads, currentImageNumber, pom, reviewerId, verifyTime,
                () => dispatch(ReviewerAction.setStartTime(performance.now())));
            dispatch(ReviewerAction.setReviewStep(REVIEW_STEP.ML_RESULT));
        } else if (reviewStep === REVIEW_STEP.ML_RESULT) {
            dispatch(ReviewerAction.setMLVerifyTime(verifyTime));
            dispatch(ReviewerAction.setReviewStep(REVIEW_STEP.CONFIDENCE));
        }
    };

    const hadleClickNext = () => {
        saveMLReviewResult(biRads, confidenceLevel, currentImageNumber, pom, reviewerId, mlVerifyTime,
            () => dispatch(ReviewerAction.setStartTime(performance.now())));

        if (isLastImage()) {
            navigate('/close-session');
        } else {
            dispatch(ReviewerAction.setCurrentImageNumber(currentImageNumber + 1));
            dispatch(ReviewerAction.setReviewStep(REVIEW_STEP.ORIGINAL));
        }
    };

    return (
        <Box sx={{backgroundColor: '#eee', p: 3}} borderRadius={1}>
            <Stack direction={{xs: 'column', md: 'row'}} spacing={3}>
                <BiRadsInput/>
                <PomInput/>
            </Stack>
            <Box sx={{display: 'flex', justifyContent: 'center', mt: 3}}>
                <Button variant="contained" sx={{px: 6}}
                        disabled={reviewStep === REVIEW_STEP.CONFIDENCE}
                        onClick={handleClickVerify}>Verify</Button>
            </Box>
            {reviewStep !== REVIEW_STEP.ORIGINAL &&
                <Box sx={{mt: 6}}>
                    <ConfidenceInput/>
                    <Box sx={{display: 'flex', justifyContent: 'center', mt: 2}}>
                        <Button variant="contained" sx={{px: 6}}
                                disabled={reviewStep !== REVIEW_STEP.CONFIDENCE}
                                onClick={hadleClickNext}>Next</Button>
                    </Box>
                </Box>
            }
        </Box>
    )
};

export default ReviewInputBox;