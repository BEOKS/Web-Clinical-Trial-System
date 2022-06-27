// action
const HEADER = 'DrawerReducer';
const TYPE = {
    OPEN_DRAWER: `${HEADER}/OPEN_DRAWER` as const,
    CLOSE_DRAWER: `${HEADER}/CLOSE_DRAWER` as const,
    DONT_DISPLAY_MENU_BUTTON: `${HEADER}/DONT_DISPLAY_MENU_BUTTON` as const,
    DISPLAY_MENU_BUTTON: `${HEADER}/DISPLAY_MENU_BUTTON` as const,
};

export const DrawerAction = {
    openDrawer: () => ({type: TYPE.OPEN_DRAWER}),
    closeDrawer: () => ({type: TYPE.CLOSE_DRAWER}),
    dontDisplayMenuButton: () => ({type: TYPE.DONT_DISPLAY_MENU_BUTTON}),
    displayMenuButton: () => ({type: TYPE.DISPLAY_MENU_BUTTON}),
};

type DrawerActionType =
    ReturnType<typeof DrawerAction.openDrawer> |
    ReturnType<typeof DrawerAction.closeDrawer> |
    ReturnType<typeof DrawerAction.dontDisplayMenuButton>|
    ReturnType<typeof DrawerAction.displayMenuButton>;


// state
type DrawerState = {
    drawerOpen: boolean,
    displayMenuButton: boolean,
}

const INIT_DRAWER_STATE: DrawerState = {
    drawerOpen: false,
    displayMenuButton: true,
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
        default:
            return state;
    }
}