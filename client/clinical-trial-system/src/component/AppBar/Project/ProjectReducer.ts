// action
const HEADER = 'ProjectReducer';
const TYPE = {
    SET_CURRENT_PROJECT: `${HEADER}/SET_CURRENT_PROJECT` as const,
    DO_NOT_DISPLAY_SELECT_PROJECT: `${HEADER}/DO_NOT_DISPLAY_ADD_PROJECT_BUTTON` as const,
    DISPLAY_SELECT_PROJECT: `${HEADER}/DISPLAY_ADD_PROJECT_BUTTON` as const,
};

export const ProjectAction = {
    setCurrentProject: (project: string) => ({type: TYPE.SET_CURRENT_PROJECT, payload: project}),
    doNotDisplaySelectProject: () => ({type: TYPE.DO_NOT_DISPLAY_SELECT_PROJECT}),
    displaySelectProject: () => ({type: TYPE.DISPLAY_SELECT_PROJECT}),
};

type ProjectActionType =
    ReturnType<typeof ProjectAction.setCurrentProject>|
    ReturnType<typeof ProjectAction.doNotDisplaySelectProject>|
    ReturnType<typeof ProjectAction.displaySelectProject>;


// state
type ProjectState = {
    currentProject: string,
    displaySelectProject: boolean,
}

const INIT_PROJECT_STATE: ProjectState = {
    currentProject: '',
    displaySelectProject: true,
};


// reducer
export default function ProjectReducer(state: ProjectState = INIT_PROJECT_STATE, action: ProjectActionType): ProjectState {
    switch (action.type) {
        case TYPE.SET_CURRENT_PROJECT:
            return {...state, currentProject: action.payload};
        case TYPE.DO_NOT_DISPLAY_SELECT_PROJECT:
            return {...state, displaySelectProject: false};
        case TYPE.DISPLAY_SELECT_PROJECT:
            return {...state, displaySelectProject: true};
        default:
            return state;
    }
}