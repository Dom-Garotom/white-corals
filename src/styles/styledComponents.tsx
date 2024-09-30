import styled from "styled-components";

type propsTitle = {
    color ?: string;
    size ?: string;
    weight ?: string;
};

export const TitleMain = styled.h1<propsTitle>`
    font-weight: ${ (prop) => prop.weight ? prop.weight : 700};
    font-size: ${ (prop) => prop.size ? prop.size : '3rem'};;
    color: ${ (prop) => prop.color ? prop.color : "#000"};;
`

export const TitleDefault = styled.h2<propsTitle>`
    font-weight: ${ (prop) => prop.weight ? prop.weight : 700};
    font-size: ${ (prop) => prop.size ? prop.size : '2rem'};;
    color: ${ (prop) => prop.color ? prop.color : "#000"};;
`
