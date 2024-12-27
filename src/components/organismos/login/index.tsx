"use client"

import InputDefault from "@/components/moleculas/inputDefault";
import styled from "styled-components";
import { MdEmail } from "react-icons/md";
import { ButtonDefault, TitleDefault } from "@/styles/styledComponents";
import Link from "next/link";
import LogoCorais from "@/public/logo-corais.png"
import Image from "next/image";
import { FaLock } from "react-icons/fa";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

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

const regex : RegExp = /^(?=.*[A-Z])(?=.*[0-9])(?=.*\.).{6,}$/

const FormSchema = z.object({
  email: z.string().email({message : "Email invalido"}),
  senha: z.string()
    .min(8, { message : "Minimo de 8 digitos"})
    .regex( regex ,{ message : "A senha deve ter pelo menos um digito com letra maiúscula um número e um ponto. "}),
  rememberMe: z.boolean(),
})


type FormSchema = z.infer<typeof FormSchema>

export default function Login() {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm<FormSchema>({
    resolver: zodResolver(FormSchema),
  });


  const handleinformation: SubmitHandler<FormSchema> = (data) => {
    console.log(data);

    const getUser = localStorage.getItem("user");
    const users : FormSchema[] = getUser ? JSON.parse(getUser) : [];
    const user = users.find(user => user.email === data.email && user.senha === data.senha);

    if (user) {
      const token = self.crypto.randomUUID();
      document.cookie = `authToken=${token}; path=/; secure; samesite=strict`;

      toast.success("Login bem-sucedido");
      router.push('/home');
    } else {
      toast.error("Seu email ou senha estão incorretos");
    }
    
  }



  return (
    <Wrapper onSubmit={handleSubmit(handleinformation)} >

      <Image src={LogoCorais} alt="Logo dos corais" />

      <TitleDefault size="1.6rem">Como é bom te ver denovo</TitleDefault>
      <p>O evento já tem mais de 521 artigos escritos desde a sua partida </p>


      <InputDefault
        label="Seu email"
        type="email"
        register={register("email", { required: true })}
        InputError={errors.email && true}
        mensageError={errors.email?.message}
        icon={<MdEmail />}
      />

      <InputDefault
        label="Sua Senha"
        type="password"
        register={register("senha")}
        InputError={errors.senha && true}
        mensageError={errors.senha?.message}
        icon={<FaLock />}
      />

      <WrapperMarkBox>
        <input type="checkbox" {...register("rememberMe")} id="rememberMe" />
        <p>Me mantenha logado</p>
      </WrapperMarkBox>

      <ButtonDefault
        type="submit"
      >
        Entrar
      </ButtonDefault>


      <p>Não tem uma conta? <Link href={"/"} >Crie uma agora</Link></p>
      <Link href={"/"} >Esqueceu a sua senha?</Link>

    </Wrapper>
  );


}