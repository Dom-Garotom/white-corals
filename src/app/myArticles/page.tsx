"use client"

import ArticlePreview from "@/components/organismos/articlePreview";
import Hero from "@/components/organismos/sectionHero";
import Header from "@/components/organismos/header";
import Footer from "@/components/moleculas/footer";
import { TitleDefault } from "@/styles/styledComponents";
import FilterArticles from "@/components/moleculas/filter";
import { useEffect, useState } from "react";
import ButtonTop from "@/components/atomos/buttonTop";
import { myDataBase } from "@/db";
import { Wrapper } from "./style";


export default function MyArticles() {
  const [isVisble, setIsVisible] = useState(Boolean);
  const quantidadeDosArtigos = myDataBase.length;

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

  })


  return (
    <div>
      <Header />
      <Hero />
      <Wrapper.Root>
        <TitleDefault size="2.7rem">
          <div className="container">
            {quantidadeDosArtigos == 0 ? "Você ainda não postou nenhum Artigo" : "Os últimos Artigos que você postou"}
          </div>
        </TitleDefault>
      </Wrapper.Root>
      <Wrapper.ArticleContainer>

        <Wrapper.Filter>
          {isVisble && quantidadeDosArtigos > 7 && <FilterArticles />}
        </Wrapper.Filter>

        <Wrapper.Articles>

          {myDataBase.map((article, index) => (
            <ArticlePreview
              id={article.id}
              key={index}
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
