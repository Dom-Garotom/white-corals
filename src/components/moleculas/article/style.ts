import styled from "styled-components"


const Main = styled.div`
    width: 100%;
    min-width: 300px;
    max-width: 850px;
    border-radius: 12px;
    background-color: #fff;
    box-shadow: 4px 4px 7px 4px rgba(0, 0, 0, 0.1);


    img{
        width: 100%;
        height: 338px;
        border-radius: 12px 12px 0px 0px;
        object-fit: cover;
    }

    span{
        margin-bottom: 30px;
    }
`

const Header = styled.div`
    padding: 32px 64px;


    div{
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        margin-top: 12px;
    }

    h1{
        color: #171717;
        font-size: 3rem;
        font-weight: 900;
        line-height: 1.25;
        margin-bottom: 0.5rem;
    }

    
    @media screen and (max-width: 800px) {
        padding: 18px;

        h1{
            font-size: 2.25rem;
        }
    }

    @media screen and (max-width: 500px) {
        padding: 8px;

        h1{
            font-size: 1.9rem;
        }
    }
`


const Body = styled.div`
    width: 100%;
    padding: 32px 64px;

    h1{
        color: #171717;
        font-size: 3rem;
        font-weight: 800;
        line-height: 1.25;
        margin-bottom: 0.5rem;
    }

    h2{
        color: #171717;
        font-size: 2rem;
        font-weight: 700;
        line-height: 1.25;
        margin: 0.9rem 0px;
    }

    p , li{
        font-size: 1.3rem;
        line-height: 2.0;
        font-weight: 300;
        font-family: "Roboto" , sans-serif;
        margin-bottom: 10px;
        color: #313131;
    }

    ul , ol{
        margin: 10px 0px;
        margin-left: 16px;
    }

    @media screen and (max-width: 800px) {
        padding: 18px;
    }

    @media screen and (max-width: 500px) {
        padding: 8px;
    }
`


export const Wrapper = {
    Root: Main,
    Header: Header,
    Body: Body
}