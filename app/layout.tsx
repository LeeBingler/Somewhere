import './globals.css';
import type { Metadata } from 'next';

import Navbar from './components/NavBar/NavBar';
import Cursor from './components/Cursor';
import Footer from './components/Footer/Footer';
import FilmNameProvider from './context/FilmNameProvider';

export const metadata: Metadata = {
    title: 'Somewhere',
    description: 'Generated by create next app',
    icons: '/Pictures/icon.png'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <body>
                <Navbar />
                <Cursor />
                <FilmNameProvider>{children}</FilmNameProvider>
                <Footer />
            </body>
        </html>
    );
}
