'use client'

import { comforta } from '../styles/fonts'
import Logo from '@/components/logo/logo';
import HeroHeadline from '@/components/hero-headline/hero-headline';
import { themeAbout } from '@/styles/theme';
import { ThemeProvider } from 'styled-components';
import useContentful from '@/hooks/use-contentful';
import { topbarSchema, heroHeadlineSchema } from '@/gql/queries.ts';
import { queryData } from '@/services/apollo-client';
import { useQuery } from '@apollo/client';
import NavBar from '@/components/nav-bar/nav-bar';
import GlobalStyle from '@/styles/global-style';


export default function Home() {

    const { loading, data } = queryData(topbarSchema);
    // const navItems = data?.topBarCollection?.items[0]?.navigationBarCollection;

    console.log(data?.topBarCollection?.items[0]?.navigationBarCollection);

    return (
        <GlobalStyle>
            <ThemeProvider theme={themeAbout}>
                {
                    !loading && (
                        <NavBar linkItems={data?.topBarCollection?.items[0]?.navigationBarCollection?.items} />

                    )
                }
                <main>
                    <Logo title='Vishroy Seenarain' />
                </main>
            </ThemeProvider>
        </GlobalStyle>
    )
}
