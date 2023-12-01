/**
 * @jest-environment jsdom
 */

import About from '../page';
import { render, screen } from '@testing-library/react';

describe('about page', () => {
    it('should render something', () => {
        const page = render(<About />);
        expect(page).toBeTruthy();
        expect(screen.getByRole('main')).toBeInTheDocument();
    });
});
