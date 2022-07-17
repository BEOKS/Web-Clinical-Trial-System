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

function RadioLabel(props: { reviewStep: number, info: BI_RADS_INFO }) {
    return (
        <Tooltip key={props.info.title} title={props.info.title} placement="left" arrow>
            <FormControlLabel value={props.info.value} control={<Radio/>} label={props.info.value}
                              disabled={props.reviewStep === REVIEW_STEP.CONFIDENCE}/>
        </Tooltip>);
}

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