/**
 * @jest-environment jsdom
 */

import LinkNavSection from '../LinkNavSection';
import { render, screen } from '@testing-library/react';
import UserEvent from '@testing-library/user-event';

describe('LinkNavSection Link', () => {
    let mockOnClick: jest.Mock<any, any, any>;
    let renderVar = render(<></>);

    beforeEach(() => {
        mockOnClick = jest.fn();
        renderVar = render(
        <LinkNavSection closeNavSection={mockOnClick} index={0} source='http://test.com' >
            Link
        </LinkNavSection>
        )

    })

    it('should display something', () => {
        expect(renderVar).toBeTruthy();
        expect(screen.getByRole('link')).toBeInTheDocument();
    });

    it('should be clickable', async () => {
        const link = screen.getByRole('link');
        await UserEvent.click(link);

        expect(mockOnClick).toHaveBeenCalled();
    })
})