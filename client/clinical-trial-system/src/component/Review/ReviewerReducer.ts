// action
const HEADER = 'ReviewerReducer';
const TYPE = {
    SET_REVIEWER_COUNT: `${HEADER}/SET_REVIEWER_COUNT` as const,
    OPEN_START_REVIEW_DIALOG: `${HEADER}/OPEN_START_REVIEW_DIALOG` as const,
    CLOSE_START_REVIEW_DIALOG: `${HEADER}/CLOSE_START_REVIEW_DIALOG` as const,
    SET_CURRENT_IMAGE_NUMBER: `${HEADER}/SET_CURRENT_IMAGE_NUMBER` as const,
    SET_IMAGE_NUMBER_LIST: `${HEADER}/SET_IMAGE_NUMBER_LIST` as const,
    SET_REVIEW_STEP: `${HEADER}/SET_REVIEW_STEP` as const,
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
};

type ReviewerActionType =
    ReturnType<typeof ReviewerAction.setReviewerCount> |
    ReturnType<typeof ReviewerAction.openStartReviewDialog> |
    ReturnType<typeof ReviewerAction.closeStartReviewDialog> |
    ReturnType<typeof ReviewerAction.setCurrentImageNumber> |
    ReturnType<typeof ReviewerAction.setImageNumberList> |
    ReturnType<typeof ReviewerAction.setReviewStep>;


// state
export const REVIEW_STEP = {
    REVIEW: 1,
    RESULT: 2,
}

export type ReviewerState = {
    reviewerCount: number,
    startReviewDialogOpen: boolean,
    currentImageNumber: number,
    imageNumberList: number[],
    reviewStep: number,
}

const INIT_REVIEWER_STATE: ReviewerState = {
    reviewerCount: 0,
    startReviewDialogOpen: false,
    currentImageNumber: 1,
    imageNumberList: [],
    reviewStep: REVIEW_STEP.REVIEW,
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
        default:
            return state;
    }
}