import styled from "styled-components";

const StyledWrapper = styled.div`
    &.block-logo {
        p {
            color: ${props => props.theme.textColor};
            text-align: center;
            font-size: 24px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
        }
    }
`;



export default StyledWrapper;
