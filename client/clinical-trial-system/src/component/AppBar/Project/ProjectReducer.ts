// action
const HEADER = 'ProjectReducer';
const TYPE = {
    SET_CURRENT_PROJECT: `${HEADER}/SET_CURRENT_PROJECT` as const,
    DO_NOT_DISPLAY_SELECT_PROJECT: `${HEADER}/DO_NOT_DISPLAY_ADD_PROJECT_BUTTON` as const,
    DISPLAY_SELECT_PROJECT: `${HEADER}/DISPLAY_ADD_PROJECT_BUTTON` as const,
    OPEN_ADD_PROJECT_DIALOG: `${HEADER}/OPEN_ADD_PROJECT_DIALOG` as const,
    CLOSE_ADD_PROJECT_DIALOG: `${HEADER}/CLOSE_ADD_PROJECT_DIALOG` as const,
    SET_NEW_PROJECT_NAME: `${HEADER}/SET_NEW_PROJECT_NAME` as const,
    SET_PROJECT_LIST: `${HEADER}/SET_PROJECT_LIST` as const,
};

export const ProjectAction = {
    setCurrentProject: (project: string) => ({type: TYPE.SET_CURRENT_PROJECT, payload: project}),
    doNotDisplaySelectProject: () => ({type: TYPE.DO_NOT_DISPLAY_SELECT_PROJECT}),
    displaySelectProject: () => ({type: TYPE.DISPLAY_SELECT_PROJECT}),
    openAddProjectDialog: () => ({type: TYPE.OPEN_ADD_PROJECT_DIALOG}),
    closeAddProjectDialog: () => ({type: TYPE.CLOSE_ADD_PROJECT_DIALOG}),
    setNewProjectName: (newProjectName: string) => ({type: TYPE.SET_NEW_PROJECT_NAME, payload: newProjectName}),
    setProjectList: (projectList: string[]) => ({type: TYPE.SET_PROJECT_LIST, payload: projectList}),
};

type ProjectActionType =
    ReturnType<typeof ProjectAction.setCurrentProject> |
    ReturnType<typeof ProjectAction.doNotDisplaySelectProject> |
    ReturnType<typeof ProjectAction.displaySelectProject> |
    ReturnType<typeof ProjectAction.openAddProjectDialog> |
    ReturnType<typeof ProjectAction.closeAddProjectDialog> |
    ReturnType<typeof ProjectAction.setNewProjectName> |
    ReturnType<typeof ProjectAction.setProjectList>;


// state
type ProjectState = {
    currentProject: string,
    displaySelectProject: boolean,
    projectAddDialogOpen: boolean,
    newProjectName: string,
    projectList: string[],
}

const INIT_PROJECT_STATE: ProjectState = {
    currentProject: '',
    displaySelectProject: true,
    projectAddDialogOpen: false,
    newProjectName: '',
    projectList: [],
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
        case TYPE.OPEN_ADD_PROJECT_DIALOG:
            return {...state, projectAddDialogOpen: true};
        case TYPE.CLOSE_ADD_PROJECT_DIALOG:
            return {...state, projectAddDialogOpen: false};
        case TYPE.SET_NEW_PROJECT_NAME:
            return {...state, newProjectName: action.payload};
        case TYPE.SET_PROJECT_LIST:
            return {...state, projectList: action.payload};
        default:
            return state;
    }
}