"use client"

import Footer from "@/components/moleculas/footer"
import Header from "@/components/organismos/header"
import Article from "@/components/moleculas/article"
import StatusBar from "@/components/moleculas/statusBar"
import { useParams } from "next/navigation"
import {  dataBase, myDataBase } from "@/db"
import {  useEffect, useState } from "react"
import { Wrapper } from "./style"
import { DataBaseArticle } from "@/types/DataBaseArticle"


export default function ArticlesPage() {
  const { id } = useParams();
  const [articleData, setArticleData ] = useState<DataBaseArticle>();


  useEffect(() => {
    const articlesDataBase = dataBase;

    const myArticles  = myDataBase;

    const currentArticlesDataBase : DataBaseArticle[] = [...articlesDataBase ,...myArticles];

    const article = currentArticlesDataBase.find( element => element.id === id );

    setArticleData(article);
  } , [])


  if (!articleData) {
    return <h2>🌀 Loading...</h2>;;
  }

  return (
    <Wrapper.root>
      <Header />

      <Wrapper.ArticleContainer>

        <Wrapper.FilterBar>
          <div className="container">
            <StatusBar likes={articleData.likes} comentarios={articleData.comentarios} />
          </div>
        </Wrapper.FilterBar>

        <Wrapper.Article>

          <Article
            id={articleData.id}
            image={articleData.image}
            article={articleData.article}
            title={articleData.title}
            tags={articleData.tags}
          />

        </Wrapper.Article>

      </Wrapper.ArticleContainer>

      <Footer />
    </Wrapper.root>
  )
}
