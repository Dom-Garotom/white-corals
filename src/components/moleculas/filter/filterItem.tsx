"use client"

import { ButtonHTMLAttributes,  useState } from "react";
import { ButtonFilter } from "@/styles/styledComponents";
import styled from "styled-components";


type FilterItemProps  = ButtonHTMLAttributes<HTMLButtonElement> & {
    iconDefault: React.ReactNode,
    iconFull: React.ReactNode,
    title : string,
    onClick ?: () => void 
}

export default function FilterItem({ iconDefault, iconFull, title , onClick  , ...props} : FilterItemProps ) {
    const [IsSelected , setIsSelected] = useState(false);


    const handleClick = () => {
        setIsSelected( prev => !prev);        

        if (onClick) {
            onClick();
        }
    };


    return (
        <Wrapper>
            <ButtonFilter title={title} onClick={handleClick} {...props}>
                    {IsSelected ? iconDefault : iconFull }
            </ButtonFilter>
        </Wrapper>
    )
}




const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px 0px;
`