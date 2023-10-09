import { styled } from 'styled-components';


const StyleHeroHeadline = styled.div`
    &.hero-headline__wrapper {
        padding: 0;
        p {
            text-align: center;
            display: flex;
            flex-direction: column;
        }

        .hero-headline__title {
            color: #fff;
            font-size: 30px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            margin-bottom: 13px;
            transition: all 0.2s ease-in-out;
            @media screen and (min-width: 992px) {
                font-size: 60px;
            }
        }

        .hero-headline__subtitle {
            color:white;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            opacity: 0.7;
            transition: all 0.2s ease-in-out;
            @media screen and (min-width: 992px) {
                font-size: 16px;
            }
        }
    }
`;


export default StyleHeroHeadline;