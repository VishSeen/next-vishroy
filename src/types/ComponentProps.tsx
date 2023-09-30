import { Image } from './Types'


export type HeroHeadlineProps = {
    className?: string;
    title: string;
    subTitle?: string;
}

export type LogoProps = {
    className?: string;
    title?: string;
    image?: Image;
    href?: string;
}