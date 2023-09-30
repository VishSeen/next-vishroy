import { styled } from 'styled-components';


const StyleHeroHeadline = styled.div`
    p {
        text-align: center;
        display: flex;
        flex-direction: column;
    }

    .hero-headline__title {
        color: ${props => props.theme.textColor};
        font-size: 60px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }

    .hero-headline__subtitle {
        color: ${props => props.theme.textColor};
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
`;


export default StyleHeroHeadline;