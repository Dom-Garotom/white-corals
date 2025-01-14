"use client"

import Hero from "@/components/organismos/sectionHero";
import { TitleDefault } from "@/styles/styledComponents";

import ButtonTop from "@/components/atomos/buttonTop";
import ListOfAriclePreview from "@/components/atomos/listOfArticlePreview";
import FilterArticles from "@/components/moleculas/filterArticle";
import BaseLayout from "@/components/layout/baseLayout";


export default function ArticleHome() {
  return (
    <BaseLayout
      filter={<FilterArticles />}
      upperBody={<Hero />}
    >
      <TitleDefault size="2.7rem">Últimos Artigos da Comunidade</TitleDefault>
      <ListOfAriclePreview />
      <ButtonTop />
    </BaseLayout>
  );
}