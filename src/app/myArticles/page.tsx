"use client"

import styled from "styled-components";
import ArticlePreview from "@/components/organismos/articlePreview";
import Hero from "@/components/organismos/sectionHero";
import Header from "@/components/organismos/header";
import Footer from "@/components/moleculas/footer";
import { TitleDefault } from "@/styles/styledComponents";
import FilterArticles from "@/components/moleculas/filter";
import { useEffect, useState } from "react";

const WrapperArticleContainer = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 2fr minmax(350px, 800px) 2fr;
  padding: 20px;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
  `

const WrapperArticles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1 0 auto;

  @media (max-width: 1000px) {
    align-items: center;
  }
`

const WrapperFilter = styled.div`
  position: relative;
  display: flex;
  justify-content: end;
  padding: 20px;

  div{
    position: fixed;
    top: 100px;
  }

  @media screen and (max-width: 1000px) {
    grid-column: 1 / -1;
    justify-content: center;
    padding: 10px;
    
    div{
      width: 95%;
      position: fixed;
      top: 30px;
      top: 92%;
      
    }
  
  }

`

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0px 20px;

  @media screen and (max-width: 700px) {
    h2{
      font-size: 2rem;
    }
  }
`




export default function MyArticles() {



  const getLocalStorage = JSON.parse(String(localStorage.getItem("article")));

  let dataLocalStorage = [];

  dataLocalStorage = Array.isArray(getLocalStorage) ? getLocalStorage : [];

  const quantidadeDosArtigos = dataLocalStorage.length;

  const [isVisble, setIsVisible] = useState(Boolean);

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
      <Wrapper>
        <TitleDefault size="2.7rem">
          {quantidadeDosArtigos == 0 ? "Você ainda não postou nenhum Artigo" : "Os últimos Artigos que você postou"}
        </TitleDefault>

      </Wrapper>
      <WrapperArticleContainer>
        <WrapperFilter>
          { isVisble && quantidadeDosArtigos > 7  ? <FilterArticles /> : ""}
        </WrapperFilter>
        <WrapperArticles>

          {dataLocalStorage.map((article, index) => (
            <ArticlePreview
              id={article.id}
              key={index}
              title={article.title}
              tags={article.tags}
              likes={article.likes}
              comentarios={article.comentarios}
              saved={article.saved}
            />
          ))}

        </WrapperArticles>

      </WrapperArticleContainer>
      <Footer />
    </div>
  );


}
