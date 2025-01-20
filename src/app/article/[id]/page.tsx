"use client"

import Article from "@/components/moleculas/article"
import StatusBar from "@/components/moleculas/statusBar"
import { useParams } from "next/navigation"
import { useArticle } from "@/hooks/useArticle"
import BaseLayout from "@/components/layout/baseLayout"
import { useEffect, useState } from "react"
import { Article as TypeArticle } from "@/types/aticle"
import { ArtiSphereApi } from "@/services/api/artisphere"


export default function ArticlesPage() {
  const { id } = useParams();

  const [articleCurrent, setArticleCurrent] = useState<TypeArticle>()
  const [Loading, setLoading] = useState(true)
  const { articleData } = useArticle();

  const handleArticle = () => {
    return articleData.find(article => article.id === id);
  }

  const fetchArticleById = async (id: string | string[]) => {
    try {
      const { data } = await ArtiSphereApi.get(`/articles/${id}`);
      const articleResponse: TypeArticle[] = JSON.parse(data);
      return articleResponse[0];
    } catch (error) {
      console.log("Infelizmente não foi possível realizar a requisição")
      console.log("Erro : " + error)
    }
  }

  useEffect(() => {

    const findArticleData = async () => {
      let article = handleArticle();

      if (!article) {
        article = await fetchArticleById(id);
      }

      setArticleCurrent(article);
      setLoading(false);
    }

    findArticleData();

  }, [id, articleData])


  if (Loading) {
    return <h2>🌀 Loading...</h2>;
  }

  if (!articleCurrent) {
    return <h2>❌ Artigo não encontrado...</h2>;
  }

  return (
    <BaseLayout
      filter={
        <StatusBar likes={articleCurrent.num_likes} comentarios={articleCurrent.num_comments} />
      }
    >
      <Article
        id={articleCurrent.id}
        image={articleCurrent.imageUrl}
        article={articleCurrent.article}
        title={articleCurrent.title}
        tags={articleCurrent.tags}
      />
    </BaseLayout>
  )
}