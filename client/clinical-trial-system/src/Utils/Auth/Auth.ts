import {AUTH_URL} from './config.js'

export enum UserState {
    NOT_LOGIN,
    NEW_USER,
    EXISTING_USER
}

export function isUserLogin() {
    return false;
}

export function isUserDataExist() {
    return false;
}

export function checkLoginState(setLoginStatus : (state : UserState)=>void){
    if(isUserLogin()){
        if(isUserDataExist()){
            setLoginStatus(UserState.EXISTING_USER)
        }
        else{
            setLoginStatus(UserState.NEW_USER)
        }
    }
    else{
        setLoginStatus(UserState.NOT_LOGIN)
    }
}
export function redirectToAuthPage(){
    window.location.href=AUTH_URL
}