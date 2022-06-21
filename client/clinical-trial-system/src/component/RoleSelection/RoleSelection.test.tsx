import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import axios from "axios";

jest.mock('axios', () => jest.fn())

import RoleSelection from "./RoleSelection";
const PI_NAME='PI'
const REVIEWER_NAME='Reviewer'

function getButtons() {
    const piButton = screen.getByTestId('pi-button')
    const reviewerButton = screen.getByTestId('reviewer-button')
    return {piButton, reviewerButton};
}

test('check role content exist',()=>{
    render(<RoleSelection/>)
    const {piButton, reviewerButton} = getButtons();
    expect(piButton.innerHTML).toContain(process.env.REACT_APP_PI_NAME)
    expect(reviewerButton.innerHTML).toContain(process.env.REACT_APP_REVIEWER_NAME)
})

test('check button click event',async () => {
    render(<RoleSelection/>)
    const {piButton, reviewerButton} = getButtons();
    (axios.get as jest.Mock).mockResolvedValueOnce('users');
    await userEvent.click(piButton)

})

