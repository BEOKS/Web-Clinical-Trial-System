import {Box, Typography, Slider} from "@mui/material";
import {REVIEW_STEP, ReviewerAction} from "../../ReviewerReducer";
import * as React from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../store";

const marksConfidence = [
    {value: 0, label: '0',},
    {value: 5, label: '5',},
    {value: 10, label: '10',},
];

const ConfidenceInput = () => {
    const dispatch = useDispatch();
    const reviewStep = useSelector((state: RootState) => state.ReviewerReducer.reviewStep);

    const handleChange = (event: Event, newValue: number | number[]) => {
        dispatch(ReviewerAction.setConfidenceLevel(newValue as number));
    };

    return (
        <Box>
            <Typography id="confidence-slider" gutterBottom color="text.secondary">
                Confidence Level
            </Typography>
            <Slider
                aria-labelledby="confidence-slider"
                disabled={reviewStep !== REVIEW_STEP.CONFIDENCE}
                defaultValue={9}
                step={1}
                valueLabelDisplay="auto"
                marks={marksConfidence}
                min={0} max={10}
                onChange={handleChange}
            />
        </Box>
    )
};

export default ConfidenceInput;