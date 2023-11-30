/**
 * @jest-environment jsdom
 */

import sleep from '@/app/lib/sleep';
import EmailBtn from '../EmailBtn';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Email Button', () => {
    it('should render something', () => {
        const { asFragment } = render(<EmailBtn />);
        const component = asFragment();

        expect(component).toBeTruthy();
    });

    //https://stackoverflow.com/questions/62351935/how-to-mock-navigator-clipboard-writetext-in-jest
    it("should copy Lee's email in the clipboard", async () => {
        const user = userEvent.setup();
        render(<EmailBtn />);
        const btn = screen.getByRole('button');
        await user.click(btn);
        const clipboardText = await navigator.clipboard.readText();

        expect(clipboardText).toBe('binglerlee@gmail.com');
    });

    it('should display a popup 2sec that the email is copied', async () => {
        const user = userEvent.setup();
        render(<EmailBtn />);
        const btn = screen.getByRole('button');
        const popup = screen.getByText('Email copied to the clipboard')
        await user.click(btn);

        expect(popup).toBeVisible();
        await sleep(3000);
        expect(popup).not.toBeVisible();
    });
});
