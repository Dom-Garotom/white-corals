import styled from "styled-components"
import { FaComments } from "react-icons/fa";
import { useState } from "react";

const Wrapper = styled.button`
    display : flex ; 
    align-items: center;
    justify-content: center;
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
type prop = {
    numberComent: number;
}

export default function ComentStatus( {numberComent}: prop) {
    const [numComments , setnumComments] = useState(numberComent);
    const [isSelect , setIsSelect] = useState(false);
    const [clickAgain , setClickAgain] = useState(0);


    const handleClick = () =>{
        if (clickAgain != 0 && isSelect){
            setnumComments(numComments - 1);
            setClickAgain(0);
            setIsSelect(!isSelect);
            return;
        }

        if (!isSelect){
            setnumComments(numComments + 1);
            setIsSelect(!isSelect);
            setClickAgain(clickAgain + 1);
            return;
        }
    }

    return (
        <Wrapper  onClick={handleClick}>
            <FaComments/>
            <p>{numComments} comments</p>
        </Wrapper>
    )
}
