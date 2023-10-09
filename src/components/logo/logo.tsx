import { LogoProps } from "@/types/ComponentProps";
import { FunctionComponent } from "react";
import StyledWrapper from "./style";
import { cormorant } from "../../styles/fonts";


const Logo: FunctionComponent<LogoProps> = ({
    className,
    title,
    image,
    href
}) => {

    return (
        <StyledWrapper className={['block-logo', className].join('')}>
            <p style={cormorant.style}>
                {
                    href ? (
                        <a href={href}>
                            {title}
                        </a>
                    ) :
                    title
                }
            </p>
        </StyledWrapper>
    )
}


export default Logo;