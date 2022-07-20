/**
 * @file 리뷰어 정보 입력과 관련된 코드를 작성합니다.
 * @author 김도희 <doheedev@gmail.com>
 */

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

/**
 * Speciality 선택 컴포넌트입니다.
 * {@link SPECIALITY} 중 한 가지 아이템을 선택할 수 있습니다.
 */
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

/**
 * Trained for Breast Imaging 선택 컴포넌트입니다.
 * {@link TRAINED_OR_DEDICATED_OPTIONS} 중 한 가지 아이템을 선택할 수 있습니다.
 */
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

/**
 * Year of Experience 선택 컴포넌트입니다.
 * {@link EXPERIENCE_YEAR} 중 한 가지 아이템을 선택할 수 있습니다.
 */
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

/**
 * 리뷰어 정보를 입력받는 컴포넌트입니다.
 * Speciality, Trained for Breast Imaging, Year of Experience 정보를 Select 컴포넌트로 입력받을 수 있습니다.
 * 리뷰 결과 활용 동의 문구 또는 체크박스를 선택하면 리뷰 시작 페이지의 리뷰 시작 버튼이 활성화됩니다.
 */
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