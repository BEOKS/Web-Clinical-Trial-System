import {REVIEW_STEP, ReviewerAction} from "../../ReviewerReducer";
import {Tooltip, FormLabel, FormControlLabel, FormControl, RadioGroup, Radio, useMediaQuery} from "@mui/material";
import * as React from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../store";
import theme from "../../../../theme/theme";

interface BI_RADS_INFO {
    title: string,
    value: string
}

const BI_RADS_OPTIONS: BI_RADS_INFO[] = [
    {title: "Negative", value: "1"},
    {title: "Benign", value: "2"},
    {title: "Probably Benign", value: "3"},
    {title: "Low Suspicion for Malignancy", value: "4a"},
    {title: "Moderate Suspicion for Malignancy", value: "4b"},
    {title: "High Suspicion for Malignancy", value: "4c"},
    {title: "Highly Suggestive of Malignancy", value: "5"},
]

/**
 * BI-RADS 값을 라벨로 하는 Radio 버튼입니다.
 * 마우스 오버 시 Tooltip으로 카테고리명이 제공됩니다.
 * {@link BI_RADS_OPTIONS} 중 한 가지 아이템을 선택할 수 있습니다.
 */
function RadioLabel(props: { reviewStep: number, info: BI_RADS_INFO }) {
    return (
        <Tooltip key={props.info.title} title={props.info.title} placement="left" arrow>
            <FormControlLabel value={props.info.value} control={<Radio/>} label={props.info.value}
                              disabled={props.reviewStep === REVIEW_STEP.CONFIDENCE}/>
        </Tooltip>);
}

/**
 * Radio 버튼으로 이루어진 BI-RADS 입력 컴포넌트입니다.
 * [reviewStep]{@link RootState.ReviewerReducer.reviewStep}이
 * {@link REVIEW_STEP.ORIGINAL} 또는 {@link REVIEW_STEP.ML_RESULT}일 때 활성화됩니다.
 * [MUI breakpoints]{@link https://mui.com/material-ui/customization/breakpoints/#main-content}가
 * md 이상일 때는 라디오 버튼들이 세로로 배치되고, md 미만일 때는 가로로 배치됩니다.
 * @see {@link https://mui.com/material-ui/react-use-media-query/}
 */
const BiRadsInput = () => {
    const dispatch = useDispatch();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    const reviewStep = useSelector((state: RootState) => state.ReviewerReducer.reviewStep);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(ReviewerAction.setBiRads((event.target as HTMLInputElement).value));
    };

    return (
        <FormControl>
            <FormLabel id="bi-rads-label" sx={{whiteSpace: 'nowrap'}}
                       disabled={reviewStep === REVIEW_STEP.CONFIDENCE}>BI-RADS</FormLabel>
            <RadioGroup
                aria-labelledby="bi-rads-label"
                defaultValue="1"
                name="bi-rads-group"
                onChange={handleChange}
                row={matches}
            >
                {BI_RADS_OPTIONS.map(info => RadioLabel({reviewStep: reviewStep, info: info}))}
            </RadioGroup>
        </FormControl>
    )
};

export default BiRadsInput;