'use client'

import { comforta } from '../styles/fonts'
import Logo from '@/components/logo/logo';
import HeroHeadline from '@/components/hero-headline/hero-headline';
import { theme } from '@/styles/theme';
import { ThemeProvider } from 'styled-components';


export default function Home() {
    return (
        <ThemeProvider theme={theme}>
            <main>
                <HeroHeadline title="Vishroy Seenarain" subTitle='Software engineer' />
            </main>
        </ThemeProvider>
    )
}
