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

    &::before{
        content: "#";
        color: ${ prop => prop.color ? prop.color : "#878A92"} ;
        font-size: 1.1rem;
        font-weight: 700;
        margin-right: 3px ;
    }
`