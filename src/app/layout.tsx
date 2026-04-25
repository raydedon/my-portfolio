import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import React from 'react';
import NavBar from '../component/navbar/NavBar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Animesh Ray - Javascript enthusiast & a Staff Engineer',
    description: 'Animesh Ray - Javascript enthusiast & a Staff Engineer.',
    keywords: ['Next.js', 'React', 'JavaScript', 'nestjs', 'Postgres', 'react-native', 'javascript', 'typescript', 'nodejs'],
    openGraph: {
        images: '/images/dp.jpeg',
    }
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <NavBar />
                {children}
            </body>
        </html>
    );
}
