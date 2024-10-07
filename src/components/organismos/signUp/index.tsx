"use client"

import InputDefault from "@/components/moleculas/inputDefault";
import { Wrapper , WrapperMarkBox } from "./styled";
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
import { toast } from "sonner";
import { useRouter } from "next/navigation";



const regex: RegExp = /^(?=.*[A-Z])(?=.*[0-9])(?=.*\.).{6,}$/


const Formschema = z.object({
  nome: z.string().min(5, { message: "Minímo de 5 caracteres" }),
  email: z.string().email({ message: "Email inválido" }),

  senha: z.string()
    .min(8, { message: "Minimo de 8 digitos" })
    .regex(regex, { message: "A senha deve ter pelo menos um digito com letra maiúscula um número e um ponto. " }),

  aceptEmail: z.boolean(),
})

type Formschema = z.infer<typeof Formschema>


export default function SignUp() {
  const router = useRouter();

  const { register, handleSubmit, formState: { errors } } = useForm<Formschema>({
    resolver: zodResolver(Formschema),
  });


  const handleInformation: SubmitHandler<Formschema> = (data) => {

    const getUser = localStorage.getItem("user");
    const users = getUser ? JSON.parse(getUser) : [];

    const newUser = data;
    users.push(newUser);

    localStorage.setItem("user", JSON.stringify(users))

    toast.success("Sua conta foi criada com sucesso");


    const token = self.crypto.randomUUID();
    document.cookie = `authToken=${token}; path=/; secure; samesite=strict`;
    router.push('/home');
  }


  return (
    <Wrapper onSubmit={handleSubmit(handleInformation)}>

      <Image src={LogoCorais} alt="Logo dos corais" />

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
        <input type="checkbox" {...register("aceptEmail")} />
        <p>Concordo em receber notificações no e-mail sobre o evento.</p>
      </WrapperMarkBox>

      <ButtonDefault type="submit">
        Participar do Evento
      </ButtonDefault>

      <p>Já tem uma conta? <Link href={"/login"} >Acesse agora</Link></p>


    </Wrapper>
  );


}
