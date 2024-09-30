import styled from "styled-components";

type propsTitle = {
    color ?: string;
    size ?: string;
    weight ?: string;
};

export const TitleMain = styled.h1<propsTitle>`
    font-weight: ${ (prop) => prop.weight ? prop.weight : 700};
    font-size: ${ (prop) => prop.size ? prop.size : '3rem'};
    color: ${ (prop) => prop.color ? prop.color : "#000"};
`

export const TitleDefault = styled.h2<propsTitle>`
    font-weight: ${ (prop) => prop.weight ? prop.weight : 700};
    font-size: ${ (prop) => prop.size ? prop.size : '2rem'};
    color: ${ (prop) => prop.color ? prop.color : "#000"};
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
    secondary?: boolean;
    lock?: boolean;
    block ?: boolean
  };
  

export const ButtonDefault = styled.button<ButtonProps>`
    width: 250px;
    height: 48px;
    padding: 10px;
    border-radius: 4px;
    font-weight: 700;
    font-size: 1.2rem;
    color: ${(props) => ( props.secondary ? "#3B6AE1": "#FFF ")};
    background-color: ${(props) => ( props.secondary ? "#fff" : "#3B6AE1")};
    border : ${prop => prop.secondary && "solid 2px #3B6AE1" };
    opacity: ${(props) => (props.lock ? 0.40 : 1)};
    transition: all 200ms;
    cursor: ${(props) => (props.lock ? "no-drop" : "pointer")};


    &:hover{
        background-color: ${(props) => ( props.secondary ? "#3B6AE1": "#3158bd ")};
        color: #fff;
        transition: all 200ms;
    }
`   