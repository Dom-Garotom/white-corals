import { useState } from "react";
import { ButtonFilter } from "@/styles/styledComponents";

type prop = {
    iconDefault : React.ReactNode,
    iconFull :  React.ReactNode;
    handleFunction ?: () => void;
}

export default function Statusdefault({ iconDefault , iconFull , handleFunction } : prop) {
    const [isSelect, setIsSelect] = useState(false);


    const handleClick = () => {
        setIsSelect(!isSelect);
    }

    return (
        <ButtonFilter onClick={handleFunction}>
            <span onClick={handleClick}>
            {isSelect ? (
                iconDefault
            ) : (
                iconFull
            )}
            </span>
        </ButtonFilter>
    )
}
