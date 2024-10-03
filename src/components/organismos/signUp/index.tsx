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
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler } from "react-hook-form";

const Wrapper = styled.form`
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

const regex : RegExp = /^(?=.*[A-Z])(?=.*[0-9])(?=.*\.).{6,}$/


const Formschema = z.object({
  nome: z.string().min( 5 ,{ message : "Minímo de 5 caracteres"}),
  email: z.string().email({message : "Email inválido"}),
  
  senha: z.string()
    .min(8, { message : "Minimo de 8 digitos"})
    .regex( regex ,{ message : "A senha deve ter pelo menos um digito com letra maiúscula um número e um ponto. "}),

  aceptEmail : z.boolean(),
})

type Formschema = z.infer<typeof Formschema>

export default function SignUp() {

  const { register , handleSubmit , formState : {errors}} = useForm<Formschema>({
    resolver: zodResolver(Formschema),
  });


  const handleInformation : SubmitHandler<Formschema> = ( data ) => {
    console.log("Form data:", data);
  }
  
  
  
  return (
    <Wrapper  onSubmit={handleSubmit(handleInformation)}>

      <Image src={LogoCorais} alt="Logo dos corais"/>

      <TitleDefault size="1.6rem">Cadastre-se para participar do evento</TitleDefault>
      <p>O evento já tem mais de 2,121 artigos escritos entre e publique o seu </p>

      <InputDefault 
        icon={<MdPerson />}
        label="Seu Nome"
        register={register("nome")}
        InputError={errors.nome && true}
        mensageError={errors.nome}
       />


      <InputDefault 
        icon={<MdEmail />}
        label="Seu email"
        type="email"
        register={register("email")}
        InputError={errors.email && true}
        mensageError={errors.email}
       />

      <InputDefault 
        icon={<FaLock />}
        label="Sua Senha"
        type="password"
        register={register("senha")}
        InputError={errors.senha && true}
        mensageError={errors.senha}
       />

       <WrapperMarkBox>
        <input type="checkbox" {...register("aceptEmail")}/>
        <p>Concordo em receber notificações no e-mail sobre o evento.</p>
       </WrapperMarkBox>

       <ButtonDefault type="submit">
          Participar do Evento
       </ButtonDefault>

       <p>Já tem uma conta? <Link href={"/login"} >Acesse agora</Link></p>


    </Wrapper>
  );


}
