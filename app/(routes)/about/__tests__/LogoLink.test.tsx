/**
 * @jest-environment jsdom
 */

import LogoLink from '../component/LogoLink';
import { render, screen } from '@testing-library/react';

describe('LogoLink Component', () => {
    it('should render a link something', () => {
        const page = render(<LogoLink />);

        expect(page).toBeTruthy();
        expect(screen.getByRole('link')).toBeInTheDocument();
    });

    it('should be clickable', () => {
        // not possible to test unless you want to test the framework
        // https://stackoverflow.com/questions/66322816/mock-next-link-with-jest-in-next-js
    });

    it('should redirect to the /films page', () => {
        render(<LogoLink />);

        const link = screen.getByRole('link');

        expect(link).toHaveAttribute('href', '/films');
    });
});
