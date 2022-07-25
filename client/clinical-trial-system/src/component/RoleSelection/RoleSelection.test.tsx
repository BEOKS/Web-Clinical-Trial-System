import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import axios from "axios";
import RoleSelection from "./RoleSelection";
import {PI_NAME,PI_DESCRIPTION,REVIEWER_DESCRIPTION,REVIEWER_NAME} from "./config";

jest.mock('axios', () => jest.fn())

function getButtons() {
    const piButton = screen.getByTestId('pi-button')
    const reviewerButton = screen.getByTestId('reviewer-button')
    return {piButton, reviewerButton};
}
function getDescriptions(){
    const piDescription = screen.getByTestId('pi-description')
    const reviewerDescription = screen.getByTestId('reviewer-description')
    return {piDescription,reviewerDescription};
}

test('check role content exist',()=>{
    render(<RoleSelection/>)
    const {piButton, reviewerButton} = getButtons();
    expect(piButton.innerHTML).toContain(PI_NAME)
    expect(reviewerButton.innerHTML).toContain(REVIEWER_NAME)
})

test('check description exist',()=>{
    render(<RoleSelection/>)
    const {piDescription,reviewerDescription}=getDescriptions()
    expect(piDescription.innerHTML).toContain(PI_DESCRIPTION)
    expect(reviewerDescription.innerHTML).toContain(REVIEWER_DESCRIPTION)
})

test('click pi button ',async () => {
    render(<RoleSelection/>)
    const {piButton, reviewerButton} = getButtons();
    //if button clicked, request user role api
    let selectedRole;
    const setUserRoleAPI=jest.fn((role: string)=>selectedRole=role)
    await userEvent.click(piButton)
    expect(selectedRole).toBe(PI_NAME)
})

test('click reviewer button ',async () => {
    render(<RoleSelection/>)
    const {piButton, reviewerButton} = getButtons();
    //if button clicked, request user role api
    let selectedRole;
    const setUserRoleAPI=jest.fn((role: string)=>selectedRole=role)
    await userEvent.click(reviewerButton)
    expect(selectedRole).toBe(PI_NAME)
})

