// action
const HEADER = 'ReviewerReducer';
const TYPE = {
    SET_REVIEWER_COUNT: `${HEADER}/SET_REVIEWER_COUNT` as const,
    OPEN_START_REVIEW_DIALOG: `${HEADER}/OPEN_START_REVIEW_DIALOG` as const,
    CLOSE_START_REVIEW_DIALOG: `${HEADER}/CLOSE_START_REVIEW_DIALOG` as const,
    SET_CURRENT_IMAGE_NUMBER: `${HEADER}/SET_CURRENT_IMAGE_NUMBER` as const,
    SET_IMAGE_NUMBER_LIST: `${HEADER}/SET_IMAGE_NUMBER_LIST` as const,
    SET_REVIEW_STEP: `${HEADER}/SET_REVIEW_STEP` as const,
    SET_BI_RADS: `${HEADER}/SET_BI_RADS` as const,
    SET_POM: `${HEADER}/SET_POM` as const,
    SET_START_TIME: `${HEADER}/SET_START_TIME` as const,
    SET_CONFIDENCE_LEVEL: `${HEADER}/SET_CONFIDENCE_LEVEL` as const,
    SET_ML_VERIFY_TIME: `${HEADER}/SET_ML_VERIFY_TIME` as const,
    SET_SPECIALITY: `${HEADER}/SET_SPECIALITY` as const,
    SET_EXPERIENCE_YEAR: `${HEADER}/SET_EXPERIENCE_YEAR` as const,
    SET_AGREE_REVIEW_CHECKBOX: `${HEADER}/SET_AGREE_REVIEW_CHECKBOX` as const,
    SET_TRAINED_OR_DEDICATED: `${HEADER}/SET_TRAINED_OR_DEDICATED` as const,
    OPEN_EXIT_REVIEW_DIALOG: `${HEADER}/OPEN_EXIT_REVIEW_DIALOG` as const,
    CLOSE_EXIT_REVIEW_DIALOG: `${HEADER}/CLOSE_EXIT_REVIEW_DIALOG` as const,
};

export const ReviewerAction = {
    setReviewerCount: (count: number) => ({type: TYPE.SET_REVIEWER_COUNT, payload: count}),
    openStartReviewDialog: () => ({type: TYPE.OPEN_START_REVIEW_DIALOG}),
    closeStartReviewDialog: () => ({type: TYPE.CLOSE_START_REVIEW_DIALOG}),
    setCurrentImageNumber: (currentImageNumber: number) => ({
        type: TYPE.SET_CURRENT_IMAGE_NUMBER,
        payload: currentImageNumber
    }),
    setImageNumberList: (imageNumberList: number[]) => ({type: TYPE.SET_IMAGE_NUMBER_LIST, payload: imageNumberList}),
    setReviewStep: (step: number) => ({type: TYPE.SET_REVIEW_STEP, payload: step}),
    setBiRads: (biRads: string) => ({type: TYPE.SET_BI_RADS, payload: biRads}),
    setPom: (pom: number) => ({type: TYPE.SET_POM, payload: pom}),
    setStartTime: (startTime: number) => ({type: TYPE.SET_START_TIME, payload: startTime}),
    setConfidenceLevel: (confidenceLevel: number) => ({type: TYPE.SET_CONFIDENCE_LEVEL, payload: confidenceLevel}),
    setMLVerifyTime: (mlVerifyTime: number) => ({type: TYPE.SET_ML_VERIFY_TIME, payload: mlVerifyTime}),
    setSpeciality: (speciality: typeof SPECIALITY.BREAST_RADIOLOGY | typeof SPECIALITY.GENERAL_RADIOLOGY |
        typeof SPECIALITY.BREAST_SURGERY | typeof SPECIALITY.OB_OR_GYM |
        typeof SPECIALITY.RADIOLOGY_RESIDENT | typeof SPECIALITY.OTHERS) => ({
        type: TYPE.SET_SPECIALITY,
        payload: speciality
    }),
    setExperienceYear: (experienceYear: typeof EXPERIENCE_YEAR.ZERO_TO_FIVE | typeof EXPERIENCE_YEAR.MORE_THAN_FIVE) => ({
        type: TYPE.SET_EXPERIENCE_YEAR,
        payload: experienceYear
    }),
    setAgreeReviewCheckbox: (agreeReview: boolean) => ({type: TYPE.SET_AGREE_REVIEW_CHECKBOX, payload: agreeReview}),
    setTrainedOrDedicated: (trainedOrDedicated: boolean) => ({
        type: TYPE.SET_TRAINED_OR_DEDICATED,
        payload: trainedOrDedicated
    }),
    openExitReviewDialog: () => ({type: TYPE.OPEN_EXIT_REVIEW_DIALOG}),
    closeExitReviewDialog: () => ({type: TYPE.CLOSE_EXIT_REVIEW_DIALOG}),
};

type ReviewerActionType =
    ReturnType<typeof ReviewerAction.setReviewerCount> |
    ReturnType<typeof ReviewerAction.openStartReviewDialog> |
    ReturnType<typeof ReviewerAction.closeStartReviewDialog> |
    ReturnType<typeof ReviewerAction.setCurrentImageNumber> |
    ReturnType<typeof ReviewerAction.setImageNumberList> |
    ReturnType<typeof ReviewerAction.setReviewStep> |
    ReturnType<typeof ReviewerAction.setBiRads> |
    ReturnType<typeof ReviewerAction.setPom> |
    ReturnType<typeof ReviewerAction.setStartTime> |
    ReturnType<typeof ReviewerAction.setConfidenceLevel> |
    ReturnType<typeof ReviewerAction.setMLVerifyTime> |
    ReturnType<typeof ReviewerAction.setSpeciality> |
    ReturnType<typeof ReviewerAction.setExperienceYear> |
    ReturnType<typeof ReviewerAction.setAgreeReviewCheckbox> |
    ReturnType<typeof ReviewerAction.setTrainedOrDedicated> |
    ReturnType<typeof ReviewerAction.openExitReviewDialog> |
    ReturnType<typeof ReviewerAction.closeExitReviewDialog>;


// state
export const REVIEW_STEP = {
    ORIGINAL: 1,
    ML_RESULT: 2,
    CONFIDENCE: 3,
}

export const EXPERIENCE_YEAR = {
    ZERO_TO_FIVE: '0~5 years',
    MORE_THAN_FIVE: 'more than 5 years',
} as const

export const SPECIALITY = {
    BREAST_RADIOLOGY: 'Breast Radiology',
    GENERAL_RADIOLOGY: 'General Radiology',
    BREAST_SURGERY: 'Breast Surgery',
    OB_OR_GYM: 'OB/GYN',
    RADIOLOGY_RESIDENT: 'Radiology Resident',
    OTHERS: 'Others',
} as const

export type ReviewerState = {
    reviewerCount: number,
    startReviewDialogOpen: boolean,
    currentImageNumber: number,
    imageNumberList: number[],
    reviewStep: number,
    biRads: string,
    pom: number,
    startTime: number,
    confidenceLevel: number,
    mlVerifyTime: number,
    speciality: typeof SPECIALITY.BREAST_RADIOLOGY | typeof SPECIALITY.GENERAL_RADIOLOGY |
        typeof SPECIALITY.BREAST_SURGERY | typeof SPECIALITY.OB_OR_GYM |
        typeof SPECIALITY.RADIOLOGY_RESIDENT | typeof SPECIALITY.OTHERS,
    experienceYear: typeof EXPERIENCE_YEAR.ZERO_TO_FIVE | typeof EXPERIENCE_YEAR.MORE_THAN_FIVE,
    agreeReview: boolean,
    trainedOrDedicated: boolean,
    exitReviewDialogOpen: boolean,
}

const INIT_REVIEWER_STATE: ReviewerState = {
    reviewerCount: 0,
    startReviewDialogOpen: false,
    currentImageNumber: 1,
    imageNumberList: [],
    reviewStep: REVIEW_STEP.ORIGINAL,
    biRads: '',
    pom: 0,
    startTime: 0,
    confidenceLevel: 0,
    mlVerifyTime: 0,
    speciality: SPECIALITY.BREAST_RADIOLOGY,
    experienceYear: EXPERIENCE_YEAR.ZERO_TO_FIVE,
    agreeReview: false,
    trainedOrDedicated: true,
    exitReviewDialogOpen: false,
};


// reducer
export default function ReviewerReducer(state: ReviewerState = INIT_REVIEWER_STATE, action: ReviewerActionType): ReviewerState {
    switch (action.type) {
        case TYPE.SET_REVIEWER_COUNT:
            return {...state, reviewerCount: action.payload};
        case TYPE.OPEN_START_REVIEW_DIALOG:
            return {...state, startReviewDialogOpen: true};
        case TYPE.CLOSE_START_REVIEW_DIALOG:
            return {...state, startReviewDialogOpen: false};
        case TYPE.SET_CURRENT_IMAGE_NUMBER:
            return {...state, currentImageNumber: action.payload};
        case TYPE.SET_IMAGE_NUMBER_LIST:
            return {...state, imageNumberList: action.payload};
        case TYPE.SET_REVIEW_STEP:
            return {...state, reviewStep: action.payload};
        case TYPE.SET_BI_RADS:
            return {...state, biRads: action.payload};
        case TYPE.SET_POM:
            return {...state, pom: action.payload};
        case TYPE.SET_START_TIME:
            return {...state, startTime: action.payload};
        case TYPE.SET_CONFIDENCE_LEVEL:
            return {...state, confidenceLevel: action.payload};
        case TYPE.SET_ML_VERIFY_TIME:
            return {...state, mlVerifyTime: action.payload};
        case TYPE.SET_SPECIALITY:
            return {...state, speciality: action.payload};
        case TYPE.SET_EXPERIENCE_YEAR:
            return {...state, experienceYear: action.payload};
        case TYPE.SET_AGREE_REVIEW_CHECKBOX:
            return {...state, agreeReview: action.payload};
        case TYPE.SET_TRAINED_OR_DEDICATED:
            return {...state, trainedOrDedicated: action.payload};
        case TYPE.OPEN_EXIT_REVIEW_DIALOG:
            return {...state, exitReviewDialogOpen: true};
        case TYPE.CLOSE_EXIT_REVIEW_DIALOG:
            return {...state, exitReviewDialogOpen: false};
        default:
            return state;
    }
}