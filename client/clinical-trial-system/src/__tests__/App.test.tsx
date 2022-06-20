// Imports
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// To Test
import App from '../App';

// Tests
test('check click event', async () => {
    // Setup
    render(<App />);
    const buttonCount = await screen.findByRole('button');

    // Pre Expecations
    expect(buttonCount.innerHTML).toBe('count is: 0');

    // Init
    const randomValue=Math.ceil(Math.random()*10)
    for(let i=0;i<randomValue;i++){
        await userEvent.click(buttonCount)
    }
    // Post Expectations
    expect(buttonCount.innerHTML).toBe(`count is: ${randomValue}`);
});