import { useState } from "react";
import { ButtonFilter } from "@/styles/styledComponents";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px 0px;
`

type prop = {
    iconDefault: React.ReactNode,
    iconFull: React.ReactNode;
    handleFunction?: () => void;
    title?: string;
    number?: number;
}

export default function Statusdefault({ iconDefault, iconFull, handleFunction, title, number}: prop) {
    const [numLikes , setNumLikes] = useState(number);
    const [isSelect , setIsSelect] = useState(false);
    const [clickAgain , setClickAgain] = useState(0);


    const handleClick = () => {
        if (isSelect) {
            if (numLikes){
                setNumLikes(numLikes > 0 ? numLikes - 1 : 0);
                setIsSelect(false);
            }
        } else {
            if (numLikes){
                setNumLikes(numLikes + 1);
                setIsSelect(true);
            }
        }
        setClickAgain(clickAgain + 1);
    };



    return (
        <Wrapper>
            <ButtonFilter onClick={handleFunction}>
                <span title={title} onClick={handleClick}>
                    {isSelect ? (
                        iconDefault
                    ) : (
                        iconFull
                    )}
                </span>
            </ButtonFilter>
            {numLikes !== undefined && !Number.isNaN(numLikes) ? numLikes : ""}
        </Wrapper>
    )
}
