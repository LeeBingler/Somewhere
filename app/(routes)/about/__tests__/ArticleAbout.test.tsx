/**
 * @jest-environment jsdom
 */

import ArticleAbout from '../component/ArticleAbout';
import { render, screen } from '@testing-library/react';

describe('Article About Component', () => {
    it('should display something', () => {
        const page = render(<ArticleAbout />);

        expect(page).toBeTruthy();
        expect(screen.getByRole('article')).toBeInTheDocument();
    });
});
