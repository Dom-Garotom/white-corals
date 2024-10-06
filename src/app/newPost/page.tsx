"use client"

import { WrapperBody, WrapperImageContainer, WrapperMain } from "./styled";
import Header from "@/components/organismos/header";
import InputDefault from "@/components/moleculas/inputDefault";
import { TitleDefault } from "@/styles/styledComponents";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components"
import { z } from "zod";
import { Toaster , toast } from "sonner";
import { useRouter } from "next/navigation";


const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  min-block-size: 80vh;
  max-width: 650px;
  width: 100%;
  display: flex;
  align-items: left;
  gap: 15px;
  border-radius: 15px;
  background-color: #ffffff;
  padding: 20px 40px;

  label{
    font-size: 1.5rem;
  }

  textarea{
    padding: 5px 0px;
    max-width: 650px;
    width: 100%;      
    height: 300px;
    border-radius: 10px;
    padding: 10px;
    font-size: 18px;
    font-family: "SF Mono" , sans-serif;
    border: 2px solid #B0B0B5;

    &::placeholder{
      font-weight: 700;
      color: #000;
    }

  }
  
  a{
    font-weight: 700;
    color: #5c21ff;
    text-decoration: none;
    padding-left: 5px;

    &:hover{
      text-decoration: underline;
    }
  }

  input{
    border-radius: 10px;
    padding: 20px;
  }

  button.buttonSubmit{
    width: 250px;
    height: 48px;
    padding: 10px;
    border-radius: 4px;
    font-weight: 700;
    font-size: 1.2rem;
    color: #FFF ;
    background-color:#3B6AE1;
    cursor: pointer;

    &:hover{
        background-color: #3158bc;
    }
  }


  @media screen and (max-width: 500px) {
    padding: 20px 20px;


    button{
      width: 100%;
    }

    
  }
`

const ArticleSchema = z.object({
  id: z.string(),
  title: z.string(),
  article: z.string(),
  tags: z.string().transform((tags) =>
    tags.split(",").map(tag => ({
      color: "#ffcc00", 
      content: tag.trim()
    }))
  ),
  likes: z.number(),
  comentarios: z.number(),
  saved: z.boolean(),
  image: z.string(),
})

type ArticleSchema = z.infer<typeof ArticleSchema>;

export default function NewPost() {
  const router = useRouter();
  const { register, handleSubmit } = useForm<ArticleSchema>();

  const handleInformation: SubmitHandler<ArticleSchema> = (data) => {

    const dataObject = data;
    dataObject.id = String(self.crypto.randomUUID());
    dataObject.likes = 0 ;
    dataObject.comentarios = 0;
    dataObject.saved = false;
    
  
    dataObject.tags = Array.isArray(dataObject.tags) ? dataObject.tags.map((tag, index) => ({
      ...tag,
      color: index % 2 === 0 ? "#ffcc00" : "#00ffcc", 
    })) : [];


    const getLocalStorage = JSON.parse(String(localStorage.getItem("article")));
    let storage : ArticleSchema[] = []; 

    storage = Array.isArray(getLocalStorage) ? getLocalStorage : [];

    storage.push(dataObject);

    localStorage.setItem("article", JSON.stringify(storage));
    
    toast.success("Post criado com sucesso")

    router.push("/home");
  }


  return (
    <WrapperBody>
      <Header />
      <WrapperMain>

        <Toaster toastOptions={{
          style: {
            padding: "10px",
            fontSize: "1.2rem",
            color: "green",
          }
        }
        } />

        <Wrapper onSubmit={handleSubmit(handleInformation)}>

          <WrapperImageContainer>
            <button onClick={(a) => a.preventDefault()}>Adicionar Imagem</button>
          </WrapperImageContainer>

          <TitleDefault size="1.2rem">Link da imagem</TitleDefault>

          <InputDefault
            icon={''}
            label=""
            type="text"
            borderColor="#000"
            register={register("image")}
            required
          />



          <TitleDefault size="1.2rem">Titulo do post</TitleDefault>

          <InputDefault
            icon={''}
            label=""
            type="text"
            borderColor="#000"
            register={register("title")}
            required
          />

          <TitleDefault size="1.2rem">Adicionar tag</TitleDefault>


          <InputDefault
            icon={''}
            label=""
            type="text"
            borderColor="#000"
            register={register("tags")}
            required
          />

          <textarea placeholder="Artigo aqui..."  {...register("article")} required />

          <p>
            Nosso Criador de Post é uma ferramenta exclusiva para escritores que permite a criação de artigos utilizando a
            <Link
              target="_blanck"
              href="https://github.com/adam-p/markdown-here/wiki/Markdown-Here-Cheatsheet">
              linguagem de Markdown (MD).
            </Link>
          </p>

          <button className="buttonSubmit" type="submit">Post</button>

        </Wrapper>



      </WrapperMain>
    </WrapperBody>
  );


}
