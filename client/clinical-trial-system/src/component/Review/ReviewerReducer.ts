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
    ReturnType<typeof ReviewerAction.setStartTime>;


// state
export const REVIEW_STEP = {
    ORIGINAL: 1,
    ML_RESULT: 2,
    CONFIDENCE: 3,
}

export type ReviewerState = {
    reviewerCount: number,
    startReviewDialogOpen: boolean,
    currentImageNumber: number,
    imageNumberList: number[],
    reviewStep: number,
    biRads: string,
    pom: number,
    startTime: number,
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
        default:
            return state;
    }
}