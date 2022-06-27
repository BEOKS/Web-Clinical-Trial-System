// action
const HEADER = 'LoginReducer';
const TYPE = {
    SET_EMAIL: `${HEADER}/SET_EMAIL` as const,
    SET_PASSWORD: `${HEADER}/SET_PASSWORD` as const,
    SET_EMAIL_VALIDATION: `${HEADER}/SET_EMAIL_VALIDATION` as const,
};

export const LoginAction = {
    setEmail: (email: string) => ({type: TYPE.SET_EMAIL, payload: email}),
    setPassword: (password: string) => ({type: TYPE.SET_PASSWORD, payload: password}),
    setEmailValidation: (emailValidation: boolean) => ({type: TYPE.SET_EMAIL_VALIDATION, payload: emailValidation}),
};

type LoginActionType =
    ReturnType<typeof LoginAction.setEmail> |
    ReturnType<typeof LoginAction.setPassword> |
    ReturnType<typeof LoginAction.setEmailValidation>;


// state
type LoginState = {
    email: string,
    password: string,
    emailValidation: boolean,
}

const INIT_LOGIN_STATE: LoginState = {
    email: '',
    password: '',
    emailValidation: true,
};


// reducer
export default function LoginReducer(state: LoginState = INIT_LOGIN_STATE, action: LoginActionType): LoginState {
    switch (action.type) {
        case TYPE.SET_EMAIL:
            return {...state, email: action.payload};
        case TYPE.SET_PASSWORD:
            return {...state, password: action.payload};
        case TYPE.SET_EMAIL_VALIDATION:
            return {...state, emailValidation: action.payload};
        default:
            return state;
    }
}