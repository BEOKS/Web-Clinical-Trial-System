import {EXPERIENCE_YEAR, SPECIALITY} from "../../component/Review/ReviewerReducer";

const stringToSpecialityType = (input: string): typeof SPECIALITY.BREAST_RADIOLOGY | typeof SPECIALITY.GENERAL_RADIOLOGY |
    typeof SPECIALITY.BREAST_SURGERY | typeof SPECIALITY.OB_OR_GYM |
    typeof SPECIALITY.RADIOLOGY_RESIDENT | typeof SPECIALITY.OTHERS => {
    if (input === SPECIALITY.BREAST_RADIOLOGY) {
        return SPECIALITY.BREAST_RADIOLOGY;
    } else if (input === SPECIALITY.GENERAL_RADIOLOGY) {
        return SPECIALITY.GENERAL_RADIOLOGY;
    } else if (input === SPECIALITY.BREAST_SURGERY) {
        return SPECIALITY.BREAST_SURGERY;
    } else if (input === SPECIALITY.OB_OR_GYM) {
        return SPECIALITY.OB_OR_GYM;
    } else if (input === SPECIALITY.RADIOLOGY_RESIDENT) {
        return SPECIALITY.RADIOLOGY_RESIDENT;
    } else if (input === SPECIALITY.OTHERS) {
        return SPECIALITY.OTHERS;
    } else {
        throw 'Invalid Input!';
    }
};

const stringToTrainedOrDedicatedType = (input: string): boolean => {
    if (input === 'yes') {
        return true;
    } else if (input === 'no') {
        return false;
    } else {
        throw 'Invalid Input!';
    }
};

const stringToExperienceYearType = (input: string): typeof EXPERIENCE_YEAR.ZERO_TO_FIVE | typeof EXPERIENCE_YEAR.MORE_THAN_FIVE => {
    if (input === EXPERIENCE_YEAR.ZERO_TO_FIVE) {
        return EXPERIENCE_YEAR.ZERO_TO_FIVE;
    } else if (input === EXPERIENCE_YEAR.MORE_THAN_FIVE) {
        return EXPERIENCE_YEAR.MORE_THAN_FIVE;
    } else {
        throw 'Invalid Input!';
    }
};

export {stringToExperienceYearType, stringToTrainedOrDedicatedType, stringToSpecialityType};