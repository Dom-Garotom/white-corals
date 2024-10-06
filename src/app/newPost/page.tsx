"use client"

import { WrapperBody, WrapperImageContainer, WrapperMain } from "./styled";
import Header from "@/components/organismos/header";
import InputDefault from "@/components/moleculas/inputDefault";
import { TagsArticles, TitleDefault } from "@/styles/styledComponents";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components"
import { z } from "zod";
import { Toaster, toast } from "sonner";
import { useRouter } from "next/navigation";
import { useState } from "react";


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

  .tags{
    display: flex;
    flex-wrap: wrap;
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
  title: z.string().min(4, "O título é obrigatório"),
  article: z.string().min(20, "O artigo é obrigatório"),
  tags: z.array(z.object({
    content: z.string(),
    color: z.string()
  })),
  likes: z.number(),
  comentarios: z.number(),
  saved: z.boolean(),
  image: z.string().url("A URL da imagem deve ser válida"),
});

type ArticleSchema = z.infer<typeof ArticleSchema>;

export default function NewPost() {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm<ArticleSchema>();
  const [ containerDataObject , setContainerDataObject] = useState<ArticleSchema>({
    id: "",
    title: "",
    article: "",
    tags: [],
    likes: 0,
    comentarios: 0,
    saved: false,
    image: "",
  })

  const [debounceTimeOut, setDebouncetimout] = useState<NodeJS.Timeout | null>(null);

  const handleTag = (a: React.ChangeEvent<HTMLInputElement>) => {
    const tag = a.currentTarget.value.trim();

    if (debounceTimeOut) {
      clearTimeout(debounceTimeOut);
    }

    setDebouncetimout(

      setTimeout(() => {

        if (tag && containerDataObject) {
          setContainerDataObject(prev => ({
            ...prev,
            tags: [...prev.tags, { content: tag, color: getRandomHexColor() }],
          }));

        }

        if (a.currentTarget) {
          a.currentTarget.value = " ";
        } 
        
      }, 3000)
    )
    
  }

  const getRandomHexColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return `#${randomColor.padStart(6, '0')}`;
  };
  


  const handleInformation: SubmitHandler<ArticleSchema> = (data) => {

    const dataObject : ArticleSchema = {
      ...data,
      id: String(self.crypto.randomUUID()),
      likes: 0,
      comentarios: 0,
      saved: false,
      tags: containerDataObject.tags,
    }

    const getLocalStorage = JSON.parse(String(localStorage.getItem("article")));
    let storage: ArticleSchema[] = [];

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
          {errors.image && <p>{errors.image.message}</p>}



          <TitleDefault size="1.2rem">Titulo do post</TitleDefault>

          <InputDefault
            icon={''}
            label=""
            type="text"
            borderColor="#000"
            register={register("title")}
            required
          />
          {errors.image && <p>{errors.image.message}</p>}

          <TitleDefault size="1.2rem">Adicionar tag</TitleDefault>


          <InputDefault
            icon={''}
            label=""
            type="text"
            borderColor="#000"
            register={register("tags")}
            onChange={handleTag}
            required
          />
          {errors.tags && <p>{errors.tags.message}</p>}
          <p>Espere 3s antes de adicionar outra tag</p>

          <div className="tags">
            {containerDataObject.tags.map((tag, index) => (
              <TagsArticles key={index} color={tag.color} >{tag.content}</TagsArticles>
            ))}
          </div>


          <textarea placeholder="Artigo aqui..."  {...register("article")} required />
          {errors.article && <p>{errors.article.message}</p>}

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
