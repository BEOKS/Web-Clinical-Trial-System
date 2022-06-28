// action
const HEADER = 'ProjectReducer';
const TYPE = {
    SET_CURRENT_PROJECT: `${HEADER}/SET_CURRENT_PROJECT` as const,
};

export const ProjectAction = {
    setCurrentProject: (project: string) => ({type: TYPE.SET_CURRENT_PROJECT, payload: project}),
};

type ProjectActionType =
    ReturnType<typeof ProjectAction.setCurrentProject>;


// state
type ProjectState = {
    currentProject: string,
}

const INIT_PROJECT_STATE: ProjectState = {
    currentProject: '',
};


// reducer
export default function ProjectReducer(state: ProjectState = INIT_PROJECT_STATE, action: ProjectActionType): ProjectState {
    switch (action.type) {
        case TYPE.SET_CURRENT_PROJECT:
            return {...state, currentProject: action.payload};
        default:
            return state;
    }
}