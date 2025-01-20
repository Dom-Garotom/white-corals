import ImageBackGround from "@/public/hero-BackGround.png"
import styled from "styled-components"


export const WrapperHero = styled.section`
    background-image: url(${ImageBackGround.src});
    background-size: cover;


    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    gap: 20px;
    width: 100%;
    min-block-size: 70vh;
    margin-bottom: 50px;
    padding: 0px 40px;

    h1{
        color: #fff;
    }

    p{
        max-width: 600px;
        width: 100%;
        font-size: 20px;
        color: #fff;
        text-align: left;
    }

    b{
        color: #FF004C;
    }

    button{
        padding:0px
    }

    a{
        color: #4370E2;
        text-decoration: none;

        width: 100%;
        height: 100%;
        padding: 10px 30px;

        &:hover{
            color: #fff;
        }
    }

    @media screen and (max-width: 400px){
        h1{
            font-size: 30px;
        }

        p{
            font-size: 16px;
        }
    }

`