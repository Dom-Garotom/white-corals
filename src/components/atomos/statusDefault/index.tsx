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

export default function Statusdefault({ iconDefault, iconFull, handleFunction, title, number }: prop) {
    const [numLikes , setNumLikes] = useState(number ? number : 0);
    const [isSelect , setIsSelect] = useState(false);
    const [clickAgain , setClickAgain] = useState(0);


    const handleClick = () =>{
        if (clickAgain != 0 && isSelect){
            setNumLikes(numLikes - 1);
            setClickAgain(0);
            setIsSelect(!isSelect);
            return;
        }

        if (!isSelect){
            setNumLikes(numLikes + 1);
            setIsSelect(!isSelect);
            setClickAgain(clickAgain + 1);
            return;
        }
    }



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
            {number && numLikes}
        </Wrapper>
    )
}
