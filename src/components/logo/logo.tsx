import { LogoProps } from "@/types/ComponentProps";
import { FunctionComponent } from "react";


const Logo: FunctionComponent<LogoProps> = ({
    className,
    title,
    image,
    href
}) => {

    return (
        <>
            <p>
                {title}
            </p>
        </>
    )
}


export default Logo;