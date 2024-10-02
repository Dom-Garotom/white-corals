import styled from "styled-components";

type propsTitle = {
    color ?: string;
    size ?: string;
    weight ?: string;
};

export const TitleMain = styled.h1<propsTitle>`
    font-weight: ${ (prop) => prop.weight ? prop.weight : 700};
    font-size: ${ (prop) => prop.size ? prop.size : '3rem'};
    color: ${ (prop) => prop.color ? prop.color : "#171717"};
`

export const TitleDefault = styled.h2<propsTitle>`
    font-weight: ${ (prop) => prop.weight ? prop.weight : 700};
    font-size: ${ (prop) => prop.size ? prop.size : '2rem'};
    color: ${ (prop) => prop.color ? prop.color : "#171717"};
`


type propsArticles = {
    color ?: string; 
}

export const TagsArticles = styled.p<propsArticles>`
    font-weight: 700;
    font-size: 1rem;
    color:#878A92;
    padding: 4px 10px;

    &::before{
        content: "#";
        color: ${ prop => prop.color ? prop.color : "#878A92"} ;
        font-size: 1.1rem;
        font-weight: 700;
        margin-right: 3px ;
    }
`

type ButtonProps = {
    $secondary?: boolean;
    $lock?: boolean;
    $block ?: boolean
  };
  

export const ButtonDefault = styled.button<ButtonProps>`
    width: 250px;
    height: 48px;
    padding: 10px;
    border-radius: 4px;
    font-weight: 700;
    font-size: 1.2rem;
    color: ${(props) => ( props.$secondary ? "#3B6AE1": "#FFF ")};
    background-color: ${(props) => ( props.$secondary ? "#fff" : "#3B6AE1")};
    border : ${prop => prop.$secondary && "solid 2px #3B6AE1" };
    opacity: ${(props) => (props.$lock ? 0.40 : 1)};
    transition: all 200ms;
    cursor: ${(props) => (props.$lock ? "no-drop" : "pointer")};


    &:hover{
        background-color: ${(props) => ( props.$secondary ? "#3B6AE1": "#3158bd ")};
        color: #fff;
        transition: all 200ms;
    }
`   

export const ButtonMenuHeader = styled.button<ButtonProps>`
    
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    font-size: 1.5rem;
    background-color: transparent;
    border-radius: 10px;
    cursor: pointer;

    &:hover{
        background-color: #fff;
    }

    pointer-events: ${(props) => (props.$block ? 'auto' : 'none')};
    display: ${(props) => (props.$block ? 'flex' : 'none')};
    opacity: ${(props) => (props.$block ? '1' : '0')};
    transform: ${(props) => (props.$block ? 'translateY(0)' : 'translateY(1rem)')};
    transition: opacity 0.20s ease, transform 0.60s ease;
`

export const ButtonFilter = styled.button<ButtonProps>`
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