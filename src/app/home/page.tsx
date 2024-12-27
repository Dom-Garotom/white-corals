"use client"

import ArticlePreview from "@/components/organismos/articlePreview";
import Hero from "@/components/organismos/sectionHero";
import Header from "@/components/organismos/header";
import Footer from "@/components/moleculas/footer";
import { TitleDefault } from "@/styles/styledComponents";
import FilterArticles from "@/components/moleculas/filter";
import { useEffect, useState } from "react";
import { dataBase, myDataBase } from "@/db";
import ButtonTop from "@/components/atomos/buttonTop";
import { Wrapper } from "./style";
import { DataBaseArticle } from "@/types/DataBaseArticle";


export default function ArticleHome() {
  const [articlesRender, setArticlesRender] = useState<DataBaseArticle[]>([]);
  const [isVisble, setIsVisible] = useState(Boolean);

  useEffect(() => {
    const DataBaseArticles = dataBase;
    const userArticles = myDataBase;
    const articles = [...DataBaseArticles, ...userArticles];

    setArticlesRender(articles)
  }, [])


  useEffect(() => {
    const handleScrool = () => {
      const scrollTop = document.documentElement.scrollTop;
      const scroll = (100 * scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight)

      if (scroll > 25) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }

    window.addEventListener("scroll", handleScrool);
    return () => {
      window.removeEventListener("scroll", handleScrool)
    }

  }, [])


  return (
    <div>
      <Header />
      <Hero />

      <Wrapper.Root>
        <TitleDefault size="2.7rem">Últimos Artigos da Comunidade</TitleDefault>
      </Wrapper.Root>

      <Wrapper.ArticleContainer>

        <Wrapper.Filter>
          <div className="container">
            {isVisble && <FilterArticles />}
          </div>
        </Wrapper.Filter>

        <Wrapper.Articles>

          {articlesRender.map((article, index) => (
            <ArticlePreview
              key={index}
              id={article.id}
              title={article.title}
              tags={article.tags}
              likes={article.likes}
              comentarios={article.comentarios}
              saved={article.saved}
              img={article.image && article.image}
            />
          ))}

        </Wrapper.Articles>

        <ButtonTop />

      </Wrapper.ArticleContainer>
      <Footer />
    </div>
  );
}
