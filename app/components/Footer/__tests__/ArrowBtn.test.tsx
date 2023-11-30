/**
 * @jest-environment jsdom
 */

import ArrowBtn from '../ArrowBtn';
import { fireEvent, render, screen } from '@testing-library/react';

describe('Arrow Button Footer', () => {
    const scrollToSpy = jest.fn();

    beforeEach(() => {
        Object.defineProperty(global.window, 'scrollTo', { value: scrollToSpy });
        Object.defineProperty(global.window, 'scrollY', { value: 1 });
        scrollToSpy.mockClear();
    });

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

        expect(scrollToSpy).not.toHaveBeenCalled();

        const btn = screen.getByRole('button');
        fireEvent.click(btn);

        expect(scrollToSpy).toHaveBeenCalledWith({ top: 0, left: 0, behavior: 'smooth' });
    });
});
