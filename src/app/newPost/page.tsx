"use client"

import Header from "@/components/organismos/header";
import InputDefault from "@/components/moleculas/inputDefault";
import { TitleDefault } from "@/styles/styledComponents";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { Toaster, toast } from "sonner";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { myDataBase } from "@/db";
import { Wrapper } from "./style";
import { ArticleSchema, ArticleTags } from "@/types/articleSchema";
import TagsList from "@/components/atomos/articleTags";
import { getRandomHexColor } from "@/utils/getRandomColors";


export default function NewPost() {
  const router = useRouter();
  const [debounceTimeOut, setDebouncetimout] = useState<NodeJS.Timeout | null>(null);
  const { register, handleSubmit, formState: { errors } } = useForm<ArticleSchema>();
  const [articleTags, setArticleTags] = useState<ArticleTags>([])

  // Pega a tag após um delay de 3 segundos e seta ela junto com o objeto do artigo
  const handleTag = (a: React.ChangeEvent<HTMLInputElement>) => {
    const tag = a.currentTarget.value.trim();

    if (debounceTimeOut) {
      clearTimeout(debounceTimeOut);
    }

    setDebouncetimout(
      setTimeout(() => {
        if (tag && articleTags) {
          setArticleTags(prev => ([...prev, { content: tag, color: getRandomHexColor() }]))
          a.currentTarget.value = "";
        }
      }, 1000))
  }

  // Salva os dados do artigo no sistema
  const handleInformation: SubmitHandler<ArticleSchema> = (atributesArticle) => {
    try {
      const submittedArticle: ArticleSchema = {
        ...atributesArticle,
        id: String(self.crypto.randomUUID()),
        likes: 0,
        comentarios: 0,
        saved: false,
        tags: articleTags,
      }

      myDataBase.push(submittedArticle)
      toast.success("Post criado com sucesso")
      router.replace("/home");

    } catch (error) {
      toast.error("Ocorreu um erro ao salvar o post");
      console.error("Erro ao salvar post:", error);
    }
  }


  return (
    <>
      <Header />
      <Wrapper.Main>

        <Toaster toastOptions={{
          style: {
            padding: "10px",
            fontSize: "1.2rem",
            color: "green",
          }
        }} />

        <Wrapper.Form onSubmit={handleSubmit(handleInformation)}>

          <Wrapper.ImageContainer>
            <button onClick={(a) => a.preventDefault()}>Adicionar Imagem</button>
          </Wrapper.ImageContainer>

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
            mensageError={errors.title?.message}
            InputError={errors.title && true}
            required
          />
          {errors.title && <p>{errors.title.message}</p>}

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
          <p>Espere antes de adicionar outra tag</p>

          <TagsList tags={articleTags} />

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
        </Wrapper.Form>
      </Wrapper.Main>
    </>
  );


}
