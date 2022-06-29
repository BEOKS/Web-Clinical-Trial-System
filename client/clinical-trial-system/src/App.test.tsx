import {render} from "@testing-library/react";
import {isUserLogin,isUserDataExist,redirectToAuthPage} from "./Utils/Auth/Auth";
import {UserState} from "./Utils/Auth/Auth";
import App from "./App";

jest.mock('./Utils/Auth/Auth',() => jest.fn())

test('From Beginning, Loading page must be loaded',()=>{
    render(<App/>)
    //TODO check loading loading page exist

})
test('when not login, you need to redirect login page',()=>{
    // checkLogin return NOT_LOGIN
    // @ts-ignore
    isUserLogin=jest.fn(()=>false)
    let isRedirect: boolean=false;

    //check redirect
    // @ts-ignore
    redirectToAuthPage=jest.fn(()=>{isRedirect=true})
    render(<App/>)
    expect(isRedirect).toBe(true)

})
test('when login success and new user, move to role selection page',()=>{
    //TODO checkLogin return NEW_USER
    //TODO check selection page route
})
test('when login success and existing user, move to role main page',()=>{
    //TODO checkLogin return EXISTING_USER
    //TODO check main page route
})