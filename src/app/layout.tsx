import './globals.css'
import type { Metadata } from 'next'
import { cormorant } from '../styles/fonts';

export const metadata: Metadata = {
    title: 'Vishroy Seenarain',
    description: 'A self taught software engineer and UI/UX designer from Mauritius.',
}


export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body style={cormorant.style}>{children}</body>
        </html>
    )
}
