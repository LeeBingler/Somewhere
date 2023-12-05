/**
 * @jest-environment jsdom
 */

import CrossBtn from '../CrossBtn';
import { render, screen } from '@testing-library/react';
import UserEvent from '@testing-library/user-event';

describe('Cross Button', () => {
    it('should display something', () => {
        const crossbtn = render(<CrossBtn onClick={() => {}} />);

        expect(crossbtn).toBeTruthy();
        expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('should be clickable', async () => {
        const mockCallBack = jest.fn();
        render(<CrossBtn onClick={mockCallBack} />);

        const crossBtn = screen.getByRole('button');

        await UserEvent.click(crossBtn);

        expect(mockCallBack).toHaveBeenCalled();
    });
});
