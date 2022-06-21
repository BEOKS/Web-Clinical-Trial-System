import {render} from "@testing-library/react";
import {InitLoadingPage} from "./component/InitLoadingPage/InitLoadingPage";
import App from "./App";

test('From Beginning, Loading page must be loaded',()=>{
    render(<App/>)
    //TODO check loading loading page exist

})
test('when not login, you need to redirect login page',()=>{
    //TODO checkLogin return NOT_LOGIN
    //TODO redirect to login page
})
test('when login success and new user, move to role selection page',()=>{
    //TODO checkLogin return NEW_USER
    //TODO check selection page route
})
test('when login success and existing user, move to role main page',()=>{
    //TODO checkLogin return EXISTING_USER
    //TODO check main page route
})