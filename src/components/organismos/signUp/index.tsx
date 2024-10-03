"use client"
import InputDefault from "@/components/moleculas/inputDefault";
import styled from "styled-components";
import { MdEmail } from "react-icons/md";
import { ButtonDefault, TitleDefault } from "@/styles/styledComponents";
import Link from "next/link";
import LogoCorais from "@/public/logo-corais.png"
import Image from "next/image";
import { FaLock } from "react-icons/fa";
import { MdPerson } from "react-icons/md";

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
  gap: 20px;
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
    width:100%;
  }

  button a {
    color: #ffffff;

    &:hover{
      text-decoration: none;
    }
  }
  
`

const WrapperMarkBox = styled.div`
  display: flex;
  align-items: center;
  gap:5px;
  
  input[type="checkbox"]{
    width: 20px;
    height: 20px;
  }
`

export default function SignUp() {
  return (
    <Wrapper>

      <Image src={LogoCorais} alt="Logo dos corais"/>

      <TitleDefault size="1.6rem">Cadastre-se para participar do evento</TitleDefault>
      <p>O evento já tem mais de 2,121 artigos escritos entre e publique o seu </p>

      <InputDefault 
        icon={<MdPerson />}
        label="Seu Nome"
        mensageError="Falta o nome"
        InputError
       />


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
        <p>Concordo em receber notificações no e-mail sobre o evento.</p>
       </WrapperMarkBox>

       <ButtonDefault>
        <Link href={"/home"}>Participar do Evento</Link>
       </ButtonDefault>

       <p>Já tem uma conta? <Link href={"/login"} >Acesse agora</Link></p>


    </Wrapper>
  );


}
