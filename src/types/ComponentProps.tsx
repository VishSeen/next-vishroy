import { ImageType, LinkType } from './Types'


export type HeroHeadlineProps = {
    className?: string;
    title: string;
    subTitle?: string;
}

export type LogoProps = {
    className?: string;
    title?: string;
    image?: ImageType;
    href?: string;
}


export type NavBarProps = {
    className?: string;
    linkItems: [LinkType];
}

