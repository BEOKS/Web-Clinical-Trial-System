import {Box, Checkbox, Chip, Divider, FormControl, FormControlLabel, InputLabel, MenuItem, Select} from "@mui/material";
import {EXPERIENCE_YEAR, ReviewerAction, SPECIALITY} from "../ReviewerReducer";
import * as React from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../store";
import {SelectChangeEvent} from "@mui/material/Select";
import {
    stringToExperienceYearType,
    stringToSpecialityType,
    stringToTrainedOrDedicatedType
} from "../../../Utils/Review/reviewUtils";

const ReviewerInfoInput = () => {
    const dispatch = useDispatch();
    const speciality = useSelector((state: RootState) => state.ReviewerReducer.speciality);
    const experienceYear = useSelector((state: RootState) => state.ReviewerReducer.experienceYear);
    const agreeReview = useSelector((state: RootState) => state.ReviewerReducer.agreeReview);
    const trainedOrDedicated = useSelector((state: RootState) => state.ReviewerReducer.trainedOrDedicated);

    const handleSpecialityChange = (event: SelectChangeEvent) => {
        dispatch(ReviewerAction.setSpeciality(stringToSpecialityType(event.target.value)));
    };

    const handleTrainedOrDedicatedChange = (event: SelectChangeEvent) => {
        dispatch(ReviewerAction.setTrainedOrDedicated(stringToTrainedOrDedicatedType(event.target.value)));
    };

    const handleExperienceYearChange = (event: SelectChangeEvent) => {
        dispatch(ReviewerAction.setExperienceYear(stringToExperienceYearType(event.target.value)));
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
                    value={speciality}
                    label="Speciality"
                    onChange={handleSpecialityChange}
                >
                    <MenuItem value={SPECIALITY.BREAST_RADIOLOGY}>Breast Radiology</MenuItem>
                    <MenuItem value={SPECIALITY.GENERAL_RADIOLOGY}>General Radiology</MenuItem>
                    <MenuItem value={SPECIALITY.BREAST_SURGERY}>Breast Surgery</MenuItem>
                    <MenuItem value={SPECIALITY.OB_OR_GYM}>OB/GYN</MenuItem>
                    <MenuItem value={SPECIALITY.RADIOLOGY_RESIDENT}>Radiology Resident</MenuItem>
                    <MenuItem value={SPECIALITY.OTHERS}>Others</MenuItem>
                </Select>
            </FormControl>
            <FormControl fullWidth size="small" sx={{mt: 3}}>
                <InputLabel id="trained-or-dedicated-select-label">Trained for Breast Imaging</InputLabel>
                <Select
                    labelId="trained-or-dedicated-select-label"
                    id="trained-or-dedicated-select"
                    value={trainedOrDedicated ? 'yes' : 'no'}
                    label="Trained for Breast Imaging"
                    onChange={handleTrainedOrDedicatedChange}
                >
                    <MenuItem value="yes">Yes</MenuItem>
                    <MenuItem value="no">No</MenuItem>
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