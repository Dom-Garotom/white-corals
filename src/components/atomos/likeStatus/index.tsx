import styled from "styled-components"
import { FaHeartCirclePlus } from "react-icons/fa6";
import { useState } from "react";

const Wrapper = styled.button`
    display : flex; 
    font-weight: 700;
    font-size: 1.2rem;
    padding: 7px;
    gap: 5px;
    cursor:pointer;
    border-radius: 4px;
    background-color: transparent;

    &:hover{
        background-color: #ece7e7;
    }
`

export default function LikeStatus() {
    const [numLikes , setNumLikes] = useState(120);
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
        <Wrapper  onClick={handleClick}>
            <FaHeartCirclePlus />
            <p>{numLikes} likes</p>
        </Wrapper>
    )
}
