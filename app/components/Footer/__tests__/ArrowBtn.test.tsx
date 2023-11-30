/**
 * @jest-environment jsdom
 */

import ArrowBtn from '../ArrowBtn';
import { render, screen } from '@testing-library/react';
import UserEvent from '@testing-library/user-event';

describe('Arrow Button Footer', () => {
    it('should render', () => {
        const arrowBtn = render(<ArrowBtn />);

        expect(arrowBtn).toBeTruthy();
        expect(screen.getByRole('button')).toBeTruthy();
    });

    it('should scroll to the top of the page when click', () => {
        render(
            <>
                <div style={{ height: 1000 }}>useless</div>
                <ArrowBtn />
            </>
        );

        window.scrollTo = jest.fn();
        Object.defineProperty(window, 'scrollTop', { value: 100, writable: true });

        console.log(window.innerHeight);

        const btn = screen.getByRole('button');
        UserEvent.click(btn);

        expect(window.scrollTo).toHaveBeenCalledWith(0, 0);
    });
});
