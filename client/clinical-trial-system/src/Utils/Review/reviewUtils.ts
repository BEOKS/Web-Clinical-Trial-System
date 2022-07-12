const stringToSpecialityType = (input: string): 'BREAST_RADIOLOGY' | 'GENERAL_RADIOLOGY' | 'BREAST_SURGERY' | 'OB_OR_GYM' | 'RADIOLOGY_RESIDENT' | 'OTHERS' => {
    if (input === 'BREAST_RADIOLOGY') {
        return 'BREAST_RADIOLOGY';
    } else if (input === 'GENERAL_RADIOLOGY') {
        return 'GENERAL_RADIOLOGY';
    } else if (input === 'BREAST_SURGERY') {
        return 'BREAST_SURGERY';
    } else if (input === 'OB_OR_GYM') {
        return 'OB_OR_GYM';
    } else if (input === 'RADIOLOGY_RESIDENT') {
        return 'RADIOLOGY_RESIDENT';
    } else if (input === 'OTHERS') {
        return 'OTHERS';
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

const stringToExperienceYearType = (input: string): "ZERO_TO_FIVE" | "MORE_THAN_FIVE" => {
    if (input === "ZERO_TO_FIVE") {
        return "ZERO_TO_FIVE";
    } else if (input === "MORE_THAN_FIVE") {
        return "MORE_THAN_FIVE";
    } else {
        throw 'Invalid Input!';
    }
};

export {stringToExperienceYearType, stringToTrainedOrDedicatedType, stringToSpecialityType};