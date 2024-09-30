import styled from "styled-components"
import { FaBookmark } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa6";
import { useState } from "react";

const Wrapper = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    font-size: 1.5rem;
    padding: 7px;
    gap: 5px;
    cursor:pointer;
    border-radius: 4px;
    background-color: transparent;
    
    &:hover{
        color: #5353ff;
        background-color: #7070ff26;
    }

`

export default function SaveStatus(saved : boolean) {
    const [isSelect, setIsSelect] = useState(saved);


    const handleClick = () => {
        setIsSelect(!isSelect);
    }

    return (
        <Wrapper onClick={handleClick}>
            {isSelect ? (
                <FaRegBookmark />
            ) : (
                <FaBookmark />
            )}
        </Wrapper>
    )
}
