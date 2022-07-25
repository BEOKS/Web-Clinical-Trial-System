/**
 * @author 김도희 <doheedev@gmail.com>
 */
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

/**
 * 리뷰 결과 입력 컴포넌트들을 감싸는 Box 컴포넌트입니다.
 * BI-RADS, POM, Confidence Level을 입력받을 수 있고 Verify, Next 버튼 클릭으로 시간 측정 시작/종료 및
 * 다음 [reviewStep]{@link RootState.ReviewerReducer.reviewStep}으로 넘어가는 동작을 할 수 있습니다.
 * 1. {@link REVIEW_STEP.ORIGINAL} 단계: BI-RADS, POM 입력 컴포넌트와 Verify 버튼 활성화
 * 2. {@link REVIEW_STEP.ML_RESULT} 단계: BI-RADS, POM 입력 컴포넌트와 Verify 버튼이 활성화된 상태에서 비활성화된 Confidence Level 입력 컴포넌트와 Next 버튼 등장
 * 3. {@link REVIEW_STEP.CONFIDENCE} 단계: BI-RADS, POM 입력 컴포넌트와 Verify 버튼은 비활성화되고, Confidence Level 입력 컴포넌트와 Next 버튼 활성화
 */
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

    /**
     * 1. {@link REVIEW_STEP.ORIGINAL} 단계에서 Verify 버튼을 클릭하면 원본 이미지 리뷰에 대한 시간 측정을 종료하고
     * {@link saveOriginalReviewResult}를 호출하여 원본 이미지 리뷰 결과와 측정 시간을 서버로 전송 후 새로 시간 측정을 시작합니다.
     * 그리고 [reviewStep]{@link RootState.ReviewerReducer.reviewStep}을 {@link REVIEW_STEP.ML_RESULT} 단계로 설정합니다.
     *
     * 2. {@link REVIEW_STEP.ML_RESULT} 단계에서 Verify 버튼을 클릭하면 ML 이미지 리뷰에 대한 시간 측정을 종료하고
     * 측정한 시간을 [mlVerifyTime]{@link RootState.ReviewerReducer.mlVerifyTime}에 임시 저장합니다.
     * 그리고 [reviewStep]{@link RootState.ReviewerReducer.reviewStep}을 {@link REVIEW_STEP.CONFIDENCE} 단계로 설정합니다.
     */
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

    /**
     * {@link REVIEW_STEP.CONFIDENCE} 단계에서 Next 버튼을 클릭하면
     * {@link saveMLReviewResult}을 호출하여 ML 이미지 리뷰 결과와 측정 시간 [mlVerifyTime]{@link RootState.ReviewerReducer.mlVerifyTime}을 서버로 전송 후 새로 시간 측정을 시작합니다.
     * 그리고 해당 문제가 세션의 마지막 문제인지를 검사합니다.
     * 마지막 문제라면 세션 종료 페이지로 이동하고, 마지막 문제가 아니라면 현재 이미지 번호를 1만큼 증가시켜서 다음 문제로 넘어갑니다.
     * 또한, [reviewStep]{@link RootState.ReviewerReducer.reviewStep}을 {@link REVIEW_STEP.ORIGINAL} 단계로 설정합니다.
     */
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