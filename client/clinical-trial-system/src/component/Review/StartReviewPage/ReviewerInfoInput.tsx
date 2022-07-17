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

interface REVIEWER_INFO {
    value: string,
    label: string,
}

const SPECIALITY_OPTIONS: REVIEWER_INFO[] = [
    {value: SPECIALITY.BREAST_RADIOLOGY, label: 'Breast Radiology'},
    {value: SPECIALITY.GENERAL_RADIOLOGY, label: 'General Radiology'},
    {value: SPECIALITY.BREAST_SURGERY, label: 'Breast Surgery'},
    {value: SPECIALITY.OB_OR_GYM, label: 'OB/GYN'},
    {value: SPECIALITY.RADIOLOGY_RESIDENT, label: 'Radiology Resident'},
    {value: SPECIALITY.OTHERS, label: 'Others'},
];
const TRAINED_OR_DEDICATED_OPTIONS: REVIEWER_INFO[] = [
    {value: 'yes', label: 'Yes'},
    {value: 'no', label: 'No'},
];
const EXPERIENCE_YEAR_OPTIONS: REVIEWER_INFO[] = [
    {value: EXPERIENCE_YEAR.ZERO_TO_FIVE, label: '0~5 years'},
    {value: EXPERIENCE_YEAR.MORE_THAN_FIVE, label: 'more than 5 years'},
];

function SpecialitySelect(props: { speciality: any, onChange: (e: SelectChangeEvent) => void }) {
    return (
        <FormControl fullWidth size="small" sx={{mt: 4}}>
            <InputLabel id="speciality-select-label">Speciality</InputLabel>
            <Select
                labelId="speciality-select-label"
                id="speciality-select"
                value={props.speciality}
                label="Speciality"
                onChange={props.onChange}
            >
                {SPECIALITY_OPTIONS.map(speciality =>
                    <MenuItem key={speciality.value} value={speciality.value}>{speciality.label}</MenuItem>)}
            </Select>
        </FormControl>
    )
}

function TrainedOrDedicatedSelect(props: { trainedOrDedicated: any, onChange: (e: SelectChangeEvent) => void }) {
    return (
        <FormControl fullWidth size="small" sx={{mt: 3}}>
            <InputLabel id="trained-or-dedicated-select-label">Trained for Breast Imaging</InputLabel>
            <Select
                labelId="trained-or-dedicated-select-label"
                id="trained-or-dedicated-select"
                value={props.trainedOrDedicated ? 'yes' : 'no'}
                label="Trained for Breast Imaging"
                onChange={props.onChange}
            >
                {TRAINED_OR_DEDICATED_OPTIONS.map(option =>
                    <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>)}
            </Select>
        </FormControl>
    )
}

function ExperienceYearSelect(props: { experienceYear: any, onChange: (e: SelectChangeEvent) => void }) {
    return (
        <FormControl fullWidth size="small" sx={{mt: 3}}>
            <InputLabel id="experience-year-select-label">Years of Experience</InputLabel>
            <Select
                labelId="experience-year-select-label"
                id="experience-year-select"
                value={props.experienceYear}
                label="Years of Experience"
                onChange={props.onChange}
            >
                {EXPERIENCE_YEAR_OPTIONS.map(experienceYear =>
                    <MenuItem key={experienceYear.value}
                              value={experienceYear.value}>{experienceYear.label}</MenuItem>)}
            </Select>
        </FormControl>
    )
}

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
        <Box sx={{backgroundColor: '#eee', p: 3}} borderRadius={1} width="100%">
            <Divider>
                <Chip label="Reviewer Info" color="success"/>
            </Divider>
            <SpecialitySelect speciality={speciality} onChange={handleSpecialityChange}/>
            <TrainedOrDedicatedSelect trainedOrDedicated={trainedOrDedicated}
                                      onChange={handleTrainedOrDedicatedChange}/>
            <ExperienceYearSelect experienceYear={experienceYear} onChange={handleExperienceYearChange}/>
            <FormControlLabel control={<Checkbox checked={agreeReview} onChange={handleAgreeReviewChange}/>}
                              label="I agree to utilize the review results."
                              sx={{mt: 3}}/>
        </Box>
    )
};

export default ReviewerInfoInput;