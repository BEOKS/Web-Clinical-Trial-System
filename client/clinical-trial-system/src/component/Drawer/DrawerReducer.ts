// action
const HEADER = 'DrawerReducer';
const TYPE = {
    OPEN_DRAWER: `${HEADER}/OPEN_DRAWER` as const,
    CLOSE_DRAWER: `${HEADER}/CLOSE_DRAWER` as const,
};

export const DrawerAction = {
    openDrawer: () => ({ type: TYPE.OPEN_DRAWER }),
    closeDrawer: () => ({ type: TYPE.CLOSE_DRAWER }),
};

type DrawerActionType =
    ReturnType<typeof DrawerAction.openDrawer> |
    ReturnType<typeof DrawerAction.closeDrawer>;


// state
type DrawerState = {
    drawerOpen: boolean,
}

const INIT_DRAWER_STATE: DrawerState = {
    drawerOpen: false,
};


// reducer
export default function DrawerReducer(state: DrawerState = INIT_DRAWER_STATE, action: DrawerActionType): DrawerState {
    switch (action.type) {
        case TYPE.OPEN_DRAWER:
            return { ...state, drawerOpen: true };
        case TYPE.CLOSE_DRAWER:
            return { ...state, drawerOpen: false };
        default:
            return state;
    }
}