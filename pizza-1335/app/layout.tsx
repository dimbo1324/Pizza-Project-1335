import React from 'react';
import './globals.css';
import {Nunito} from 'next/font/google';
import type {Metadata} from 'next';


const nunito = Nunito({
    subsets: ['cyrillic'],
    variable: '--font-nunito',
    weight: ['400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
    title: 'Next Pizza | Главная',
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">

        <body className={nunito.className}>
        <main className='min-h-screen'>{children}</main>
        {children}
        </body>
        </html>
    );
}
