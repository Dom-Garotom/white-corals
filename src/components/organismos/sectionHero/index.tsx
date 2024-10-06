import styled from "styled-components"
import ImageBackGround from "@/public/hero-BackGround.png"
import { ButtonDefault, TitleMain } from "@/styles/styledComponents"
import Link from "next/link"

const WrapperHero = styled.section`
    background-image: url(${ImageBackGround.src});
    background-size: cover;


    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    gap: 20px;
    width: 99vw;
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

export default function Hero() {
    return (
        <WrapperHero>
            <TitleMain>Comunidade de artigos</TitleMain>
            <p>
                Descubra os <b>impactos devastadores do branqueamento de corais</b> e saiba como você pode fazer a diferença.
                Compartilhe seu conhecimento em um ambiente colaborativo e focado em ajudar os corais.
                <b>Poste artigos, perguntas e interaja com uma comunidade</b> que está em busca dos mesmos ideais que você.
            </p>
            <ButtonDefault $secondary>
                <Link href={"/newPost"}>
                    Criar postagem
                </Link>
            </ButtonDefault>
        </WrapperHero>
    )
}
