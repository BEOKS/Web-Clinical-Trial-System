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

const TRAINED_OR_DEDICATED_OPTIONS: REVIEWER_INFO[] = [
    {value: 'yes', label: 'Yes'},
    {value: 'no', label: 'No'},
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
                {Object.values(SPECIALITY).map(speciality =>
                    <MenuItem key={speciality} value={speciality}>{speciality}</MenuItem>)}
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
                {Object.values(EXPERIENCE_YEAR).map(experienceYear =>
                    <MenuItem key={experienceYear}
                              value={experienceYear}>{experienceYear}</MenuItem>)}
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