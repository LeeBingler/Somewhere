/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import Footer from '../Footer';

describe('Footer', () => {
    it('render', () => {
        const footer = render(<Footer />);

        expect(footer).toBeTruthy();
    });

    it("render link to Lee's portfolio", () => {
        render(<Footer />);

        const link = screen.getByRole('link', { name: 'website by L.Bingler' });

        expect(link).toHaveAttribute('href', 'https://www.lee-bingler.com/');
    });

    it('open new window when click on a link', () => {
        render(<Footer />);

        const links = screen.getAllByRole('link');

        for (let link of links) {
            expect(link).toHaveAttribute('target', '_blank');
        }
    });

    it('render the name of the website', () => {
        render(<Footer />);

        const name = screen.getByText('Somewhere ©2023-2024');

        expect(name).toBeInTheDocument();
    });
});
