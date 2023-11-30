/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/react';
import FirstPage from './page';

let href = '/';

jest.mock('next/navigation', () => {
    return {
        redirect: (to: string) => (href = to)
    };
});

describe('First Page', () => {
    it('should redirect to the path /films', async () => {
        render(<FirstPage />);
        expect(href).toBe('/films');
    });
});
