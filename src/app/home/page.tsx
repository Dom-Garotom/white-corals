"use client"

import ArticlePreview from "@/components/organismos/articlePreview";
import Hero from "@/components/organismos/sectionHero";
import Header from "@/components/organismos/header";
import Footer from "@/components/moleculas/footer";
import { TitleDefault } from "@/styles/styledComponents";
import FilterArticles from "@/components/moleculas/filter";
import { useEffect, useState } from "react";
import ButtonTop from "@/components/atomos/buttonTop";
import { Wrapper } from "./style";
import { useFetchArticle } from "@/hooks/useFetchArticle";
import { Article } from "@/types/aticle";


export default function ArticleHome() {
  const { data } = useFetchArticle<Article[]>("/articles")
  const [isVisble, setIsVisible] = useState(Boolean);

  const handleScrool = () => {
    const scrollTop = document.documentElement.scrollTop;
    const scroll = (100 * scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight)

    if (scroll > 25) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }

  useEffect(() => {
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
            {isVisble && data ? <FilterArticles /> : null}
          </div>
        </Wrapper.Filter>

        <Wrapper.Articles>

          {data?.map((article, index) => (
            <ArticlePreview
              key={index}
              id={article.id}
              title={article.title}
              tags={article.tags}
              likes={article.num_likes}
              comentarios={article.num_comments}
            />
          ))}

        </Wrapper.Articles>

        <ButtonTop />

      </Wrapper.ArticleContainer>
      <Footer />
    </div>
  );
}
