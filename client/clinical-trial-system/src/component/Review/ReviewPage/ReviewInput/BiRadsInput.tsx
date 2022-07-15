import {REVIEW_STEP, ReviewerAction} from "../../ReviewerReducer";
import {Tooltip, FormLabel, FormControlLabel, FormControl, RadioGroup, Radio} from "@mui/material";
import * as React from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../store";

interface BI_RADS_INFO {
    title: string,
    value: string
}

const BI_RADS_OPTIONS: BI_RADS_INFO[] = [
    {title: "Negative", value: "1"},
    {title: "Benign", value: "2"},
    {title: "Probably Benign", value: "3"},
    {title: "Low Suspicion for Malignancy", value: "4a"},
    {title: "Moderate Suspicion for Malignancy", value: "4"},
    {title: "High Suspicion for Malignancy", value: "4c"},
    {title: "Highly Suggestive of Malignancy", value: "5"},
]

function RadioLabel(props: { reviewStep: number, info: BI_RADS_INFO }) {
    return (
        <Tooltip key={props.info.title} title={props.info.title} placement="left" arrow>
            <FormControlLabel value={props.info.value} control={<Radio/>} label={props.info.value}
                              disabled={props.reviewStep === REVIEW_STEP.CONFIDENCE}/>
        </Tooltip>);
}

const BiRadsInput = () => {
    const dispatch = useDispatch();
    const reviewStep = useSelector((state: RootState) => state.ReviewerReducer.reviewStep);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(ReviewerAction.setBiRads((event.target as HTMLInputElement).value));
    };

    return (
        <FormControl>
            <FormLabel id="bi-rads-label"
                       disabled={reviewStep === REVIEW_STEP.CONFIDENCE}>BI-RADS</FormLabel>
            <RadioGroup
                aria-labelledby="bi-rads-label"
                defaultValue="1"
                name="bi-rads-group"
                onChange={handleChange}
            >
                {BI_RADS_OPTIONS.map(info => RadioLabel({reviewStep: reviewStep, info: info}))}
            </RadioGroup>
        </FormControl>
    )
};

export default BiRadsInput;