// action
const HEADER = 'ReviewerReducer';
const TYPE = {
    SET_REVIEWER_COUNT: `${HEADER}/SET_REVIEWER_COUNT` as const,
    OPEN_START_REVIEW_DIALOG: `${HEADER}/OPEN_START_REVIEW_DIALOG` as const,
    CLOSE_START_REVIEW_DIALOG: `${HEADER}/CLOSE_START_REVIEW_DIALOG` as const,
};

export const ReviewerAction = {
    setReviewerCount: (count: number) => ({type: TYPE.SET_REVIEWER_COUNT, payload: count}),
    openStartReviewDialog: () => ({type: TYPE.OPEN_START_REVIEW_DIALOG}),
    closeStartReviewDialog: () => ({type: TYPE.CLOSE_START_REVIEW_DIALOG}),
};

type ReviewerActionType =
    ReturnType<typeof ReviewerAction.setReviewerCount> |
    ReturnType<typeof ReviewerAction.openStartReviewDialog> |
    ReturnType<typeof ReviewerAction.closeStartReviewDialog>;


// state
type ReviewerState = {
    reviewerCount: number,
    startReviewDialogOpen: boolean,
}

const INIT_REVIEWER_STATE: ReviewerState = {
    reviewerCount: 0,
    startReviewDialogOpen: false,
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
        default:
            return state;
    }
}