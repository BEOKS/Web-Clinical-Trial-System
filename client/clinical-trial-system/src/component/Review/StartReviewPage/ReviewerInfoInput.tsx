import {Box, Checkbox, Chip, Divider, FormControl, FormControlLabel, InputLabel, MenuItem, Select} from "@mui/material";
import {EXPERIENCE_YEAR, ReviewerAction} from "../ReviewerReducer";
import * as React from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../store";
import {SelectChangeEvent} from "@mui/material/Select";

const ReviewerInfoInput = () => {
    const dispatch = useDispatch();
    const speciality = useSelector((state: RootState) => state.ReviewerReducer.speciality);
    const experienceYear = useSelector((state: RootState) => state.ReviewerReducer.experienceYear);
    const agreeReview = useSelector((state: RootState) => state.ReviewerReducer.agreeReview);

    const handleSpecialityChange = (event: SelectChangeEvent) => {
        dispatch(ReviewerAction.setSpeciality(stringToSpecialityType(event.target.value)));
    };

    const stringToSpecialityType = (input: string): boolean => {
        if (input === 'true') {
            return true;
        } else if (input === 'false') {
            return false;
        } else {
            throw 'Invalid Input!';
        }
    };

    const handleExperienceYearChange = (event: SelectChangeEvent) => {
        dispatch(ReviewerAction.setExperienceYear(stringToExperienceYearType(event.target.value)));
    };

    const stringToExperienceYearType = (input: string): "ZERO_TO_FIVE" | "MORE_THAN_FIVE" => {
        if (input === "ZERO_TO_FIVE") {
            return "ZERO_TO_FIVE";
        } else if (input === "MORE_THAN_FIVE") {
            return "MORE_THAN_FIVE";
        } else {
            throw 'Invalid Input!';
        }
    };

    const handleAgreeReviewChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(ReviewerAction.setAgreeReviewCheckbox(event.target.checked));
    };

    return (
        <Box sx={{backgroundColor: '#eee', p: 3}} borderRadius={1}>
            <Divider>
                <Chip label="Reviewer Info" color="success"/>
            </Divider>
            <FormControl fullWidth size="small" sx={{mt: 4}}>
                <InputLabel id="speciality-select-label">Speciality</InputLabel>
                <Select
                    labelId="speciality-select-label"
                    id="speciality-select"
                    value={speciality ? "true" : "false"}
                    label="Speciality"
                    onChange={handleSpecialityChange}
                >
                    <MenuItem value="true">true</MenuItem>
                    <MenuItem value="false">false</MenuItem>
                </Select>
            </FormControl>
            <FormControl fullWidth size="small" sx={{mt: 3}}>
                <InputLabel id="experience-year-select-label">Years of Experience</InputLabel>
                <Select
                    labelId="experience-year-select-label"
                    id="experience-year-select"
                    value={experienceYear}
                    label="Years of Experience"
                    onChange={handleExperienceYearChange}
                >
                    <MenuItem value={EXPERIENCE_YEAR.ZERO_TO_FIVE}>0~5 years</MenuItem>
                    <MenuItem value={EXPERIENCE_YEAR.MORE_THAN_FIVE}>more than 5 years</MenuItem>
                </Select>
            </FormControl>
            <FormControlLabel control={<Checkbox checked={agreeReview}
                                                 onChange={handleAgreeReviewChange}/>}
                              label="I agree to utilize the review results."
                              sx={{mt: 3}}/>
        </Box>
    )
};

export default ReviewerInfoInput;