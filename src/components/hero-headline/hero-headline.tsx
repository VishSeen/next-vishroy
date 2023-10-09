import { HeroHeadlineProps } from "@/types/ComponentProps";
import { FunctionComponent, useEffect } from "react";
import StyleHeroHeadline from "./style";
import { useQuery, gql } from '@apollo/client';
import { comforta } from "../../styles/fonts";

const HeroHeadline: FunctionComponent<HeroHeadlineProps> = ({
    className,
    title,
    subTitle
}) => {
    return (
        <StyleHeroHeadline className={['hero-headline__wrapper', className].join(' ')}>
            <p>
                <span className="hero-headline__title">
                    {title}
                </span>

                {
                    subTitle ? (
                        <span className="hero-headline__subtitle" style={comforta.style}>
                            {subTitle}
                        </span>
                    ) : <></>
                }
            </p>
        </StyleHeroHeadline>
    )
}


export default HeroHeadline;