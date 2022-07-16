import {REVIEW_STEP, ReviewerAction} from "../../ReviewerReducer";
import {Tooltip, FormLabel, FormControlLabel, FormControl, RadioGroup, Radio} from "@mui/material";
import * as React from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../store";

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
                <Tooltip title="Negative" placement="left" arrow>
                    <FormControlLabel value="1" control={<Radio/>} label="1"
                                      disabled={reviewStep === REVIEW_STEP.CONFIDENCE}/>
                </Tooltip>
                <Tooltip title="Benign" placement="left" arrow>
                    <FormControlLabel value="2" control={<Radio/>} label="2"
                                      disabled={reviewStep === REVIEW_STEP.CONFIDENCE}/>
                </Tooltip>
                <Tooltip title="Probably Benign" placement="left" arrow>
                    <FormControlLabel value="3" control={<Radio/>} label="3"
                                      disabled={reviewStep === REVIEW_STEP.CONFIDENCE}/>
                </Tooltip>
                <Tooltip title="Low Suspicion for Malignancy" placement="left" arrow>
                    <FormControlLabel value="4a" control={<Radio/>} label="4a"
                                      disabled={reviewStep === REVIEW_STEP.CONFIDENCE}/>
                </Tooltip>
                <Tooltip title="Moderate Suspicion for Malignancy" placement="left" arrow>
                    <FormControlLabel value="4b" control={<Radio/>} label="4b"
                                      disabled={reviewStep === REVIEW_STEP.CONFIDENCE}/>
                </Tooltip>
                <Tooltip title="High Suspicion for Malignancy" placement="left" arrow>
                    <FormControlLabel value="4c" control={<Radio/>} label="4c"
                                      disabled={reviewStep === REVIEW_STEP.CONFIDENCE}/>
                </Tooltip>
                <Tooltip title="Highly Suggestive of Malignancy" placement="left" arrow>
                    <FormControlLabel value="5" control={<Radio/>} label="5"
                                      disabled={reviewStep === REVIEW_STEP.CONFIDENCE}/>
                </Tooltip>
            </RadioGroup>
        </FormControl>
    )
};

export default BiRadsInput;