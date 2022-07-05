// action
const HEADER = 'DrawerReducer';
const TYPE = {
    OPEN_DRAWER: `${HEADER}/OPEN_DRAWER` as const,
    CLOSE_DRAWER: `${HEADER}/CLOSE_DRAWER` as const,
    DONT_DISPLAY_MENU_BUTTON: `${HEADER}/DONT_DISPLAY_MENU_BUTTON` as const,
    DISPLAY_MENU_BUTTON: `${HEADER}/DISPLAY_MENU_BUTTON` as const,
    OPEN_MANAGEMENT_COLLAPSE: `${HEADER}/OPEN_MANAGEMENT_COLLAPSE` as const,
    CLOSE_MANAGEMENT_COLLAPSE: `${HEADER}/CLOSE_MANAGEMENT_COLLAPSE` as const,
};

export const DrawerAction = {
    openDrawer: () => ({type: TYPE.OPEN_DRAWER}),
    closeDrawer: () => ({type: TYPE.CLOSE_DRAWER}),
    dontDisplayMenuButton: () => ({type: TYPE.DONT_DISPLAY_MENU_BUTTON}),
    displayMenuButton: () => ({type: TYPE.DISPLAY_MENU_BUTTON}),
    openManagementCollapse: () => ({type: TYPE.OPEN_MANAGEMENT_COLLAPSE}),
    closeManagementCollapse: () => ({type: TYPE.CLOSE_MANAGEMENT_COLLAPSE}),
};

type DrawerActionType =
    ReturnType<typeof DrawerAction.openDrawer> |
    ReturnType<typeof DrawerAction.closeDrawer> |
    ReturnType<typeof DrawerAction.dontDisplayMenuButton> |
    ReturnType<typeof DrawerAction.displayMenuButton> |
    ReturnType<typeof DrawerAction.openManagementCollapse> |
    ReturnType<typeof DrawerAction.closeManagementCollapse>;


// state
type DrawerState = {
    drawerOpen: boolean,
    displayMenuButton: boolean,
    managementCollapseOpen: boolean,
}

const INIT_DRAWER_STATE: DrawerState = {
    drawerOpen: false,
    displayMenuButton: true,
    managementCollapseOpen: true,
};


// reducer
export default function DrawerReducer(state: DrawerState = INIT_DRAWER_STATE, action: DrawerActionType): DrawerState {
    switch (action.type) {
        case TYPE.OPEN_DRAWER:
            return {...state, drawerOpen: true};
        case TYPE.CLOSE_DRAWER:
            return {...state, drawerOpen: false};
        case TYPE.DONT_DISPLAY_MENU_BUTTON:
            return {...state, displayMenuButton: false};
        case TYPE.DISPLAY_MENU_BUTTON:
            return {...state, displayMenuButton: true};
        case TYPE.OPEN_MANAGEMENT_COLLAPSE:
            return {...state, managementCollapseOpen: true};
        case TYPE.CLOSE_MANAGEMENT_COLLAPSE:
            return {...state, managementCollapseOpen: false};
        default:
            return state;
    }
}