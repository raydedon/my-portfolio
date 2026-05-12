import type { Metadata } from 'next';
import { Inter, Geist } from 'next/font/google';
import './globals.css';
import React from 'react';
import NavBar from '../component/navbar/NavBar';
import { Toaster } from '@/components/ui/sonner';
import { cn } from '@/lib/utils';

const geist = Geist({ subsets:['latin'],variable:'--font-sans' });

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
        <html lang="en" className={cn('font-sans', geist.variable)}>
            <body className={inter.className}>
                <NavBar />
                {children}
                <Toaster position="top-right" richColors closeButton />
            </body>
        </html>
    );
}
