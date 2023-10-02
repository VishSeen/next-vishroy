'use client'

import { comforta } from '../styles/fonts'
import Logo from '@/components/logo/logo';
import HeroHeadline from '@/components/hero-headline/hero-headline';
import { theme } from '@/styles/theme';
import { ThemeProvider } from 'styled-components';
import useContentful from '@/hooks/use-contentful';
import {topbarSchema, heroHeadlineSchema} from '@/gql/queries';
import { queryData } from '@/services/apollo-client';
import { useQuery } from '@apollo/client';


export default function Home() {
    // const data = useContentful(heroHeadlineSchema);
    const { loading, data } = queryData(topbarSchema);

    return (
        <ThemeProvider theme={theme}>
            <main>
                <HeroHeadline title="Vishroy Seenarain" subTitle='Software engineer' />
            </main>
        </ThemeProvider>
    )
}
