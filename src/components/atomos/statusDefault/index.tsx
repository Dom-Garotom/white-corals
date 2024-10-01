import { useState } from "react";
import { ButtonFilter } from "@/styles/styledComponents";

type prop = {
    iconDefault : React.ReactNode,
    iconFull :  React.ReactNode;
    handleFunction ?: () => void;
    title ?: string;
}

export default function Statusdefault({ iconDefault , iconFull , handleFunction , title } : prop) {
    const [isSelect, setIsSelect] = useState(false);


    const handleClick = () => {
        setIsSelect(!isSelect);
    }

    return (
        <ButtonFilter onClick={handleFunction}>
            <span title={title} onClick={handleClick}>
            {isSelect ? (
                iconDefault
            ) : (
                iconFull
            )}
            </span>
        </ButtonFilter>
    )
}
