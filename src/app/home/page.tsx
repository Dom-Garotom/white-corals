"use client"

import Hero from "@/components/organismos/sectionHero";
import Header from "@/components/organismos/header";
import Footer from "@/components/moleculas/footer";
import { TitleDefault } from "@/styles/styledComponents";

import ButtonTop from "@/components/atomos/buttonTop";
import { Wrapper } from "./style";
import ListOfAriclePreview from "@/components/atomos/listOfArticlePreview";
import FilterArticles from "@/components/moleculas/filterArticle";


export default function ArticleHome() {
  return (
    <>
      <Header />
      <Hero />

      <Wrapper.div>
        <TitleDefault size="2.7rem">Últimos Artigos da Comunidade</TitleDefault>
      </Wrapper.div>

      <Wrapper.ArticleContainer>

        <Wrapper.Filter>
          <div className="container">
            <FilterArticles />
          </div>
        </Wrapper.Filter>

        <ListOfAriclePreview />

        <ButtonTop />

      </Wrapper.ArticleContainer>
      <Footer />
    </>
  );
}
