"use client"
import InputDefault from "@/components/moleculas/inputDefault";
import styled from "styled-components";
import { MdEmail } from "react-icons/md";
import { ButtonDefault, TitleDefault } from "@/styles/styledComponents";
import Link from "next/link";
import LogoCorais from "@/public/logo-corais.png"
import Image from "next/image";
import { FaLock } from "react-icons/fa";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  min-block-size: 80vh;
  max-width: 550px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 25px;
  border-radius: 15px;
  background-color: #ffffff;
  padding: 20px 40px;

  p{
    font-weight: 500;
    color: #121212;
  }

  a{
    font-weight: 700;
    color: #3B6AE1;
    text-decoration: none;

    &:hover{
    text-decoration: underline;
    }
  }

  button{
    width: 100%;
  }

  button a {
    color: #ffffff;

    &:hover{
      text-decoration: none;
    }
  }
  
`

const WrapperMarkBox = styled.div`
  width: 100%;
  display: flex;
  align-items: start;
  gap:5px;
  
  
  input[type="checkbox"]{
    width: 20px;
    height: 20px;
  }
`

export default function Login() {
    return (
        <Wrapper>

            <Image src={LogoCorais} alt="Logo dos corais" />

            <TitleDefault size="1.6rem">Como é bom te ver denovo</TitleDefault>
            <p>O evento já tem mais de 521 artigos escritos desde a sua partida </p>


            <InputDefault
                icon={<MdEmail />}
                label="Seu email"
                type="email"
            />

            <InputDefault
                icon={<FaLock />}
                label="Sua Senha"
                type="password"
            />

            <WrapperMarkBox>
                <input type="checkbox" name="" id="" />
                <p>Me mantenha logado</p>
            </WrapperMarkBox>

            <ButtonDefault>
                <Link href={"/home"}>Entrar</Link>
            </ButtonDefault>

            <p>Não tem uma conta? <Link href={"/"} >Crie uma agora</Link></p>
            <Link href={"/"} >Esqueceu a sua senha?</Link>



        </Wrapper>
    );


}
