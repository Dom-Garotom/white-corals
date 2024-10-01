"use client"

import styled from "styled-components";
import ArticlePreview from "@/components/organismos/articlePreview";
import Hero from "@/components/organismos/sectionHero";
import Header from "@/components/organismos/header";
import Footer from "@/components/moleculas/footer";
import { TitleDefault } from "@/styles/styledComponents";

const WrapperArticleContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding: 20px;
`


export default function ArticleHome() {
  const articles = [
    {
      title: "O branqueamento dos corais na área sul do país é uma ameaça iminente",
      tags: [
        { color: "#fff700", content: "Corais" },
        { color: "#036eda", content: "Branqueamento" },
        { color: "#00f400", content: "Sul do país" },
        { color: "#ff1100", content: "Corais brancos" },
      ],
      likes: 120,
      comentarios: 5,
      saved: true,
    },
    {
      title: "Mudanças climáticas e os impactos nos ecossistemas marinhos",
      tags: [
        { color: "#00aaff", content: "Mudanças climáticas" },
        { color: "#ff9900", content: "Ecossistemas" },
        { color: "#00ff00", content: "Oceanos" },
      ],
      likes: 85,
      comentarios: 8,
      saved: false,
    },
    {
      title: "A importância da preservação das tartarugas marinhas",
      tags: [
        { color: "#33cc33", content: "Tartarugas" },
        { color: "#ffcc00", content: "Preservação" },
        { color: "#0066ff", content: "Mar" },
      ],
      likes: 200,
      comentarios: 12,
      saved: true,
    },
    {
      title: "A poluição dos mares e suas consequências",
      tags: [
        { color: "#ff3333", content: "Poluição" },
        { color: "#00ccff", content: "Mares" },
        { color: "#cc00cc", content: "Consequências" },
      ],
      likes: 95,
      comentarios: 4,
      saved: false,
    },
    {
      title: "Como as cidades costeiras estão se adaptando às mudanças do clima",
      tags: [
        { color: "#ff6600", content: "Cidades costeiras" },
        { color: "#0066cc", content: "Adaptação" },
        { color: "#00cc99", content: "Mudanças climáticas" },
      ],
      likes: 150,
      comentarios: 10,
      saved: true,
    },
    {
      title: "Os corais e sua importância para a biodiversidade marinha",
      tags: [
        { color: "#ffccff", content: "Biodiversidade" },
        { color: "#3300cc", content: "Corais" },
        { color: "#ffcc00", content: "Ecossistemas" },
      ],
      likes: 175,
      comentarios: 6,
      saved: true,
    },
    {
      title: "Impactos da pesca excessiva nos oceanos",
      tags: [
        { color: "#ff9900", content: "Pesca excessiva" },
        { color: "#0033ff", content: "Oceanos" },
        { color: "#00ff00", content: "Sustentabilidade" },
      ],
      likes: 65,
      comentarios: 3,
      saved: false,
    },
    {
      title: "O papel das algas na saúde dos oceanos",
      tags: [
        { color: "#00ccff", content: "Algas" },
        { color: "#00ff99", content: "Saúde marinha" },
        { color: "#ff3300", content: "Ecosistema" },
      ],
      likes: 110,
      comentarios: 7,
      saved: true,
    },
    {
      title: "Desenvolvimento sustentável e a proteção dos mares",
      tags: [
        { color: "#ffcc00", content: "Desenvolvimento sustentável" },
        { color: "#00ffcc", content: "Proteção" },
        { color: "#ff6699", content: "Mares" },
      ],
      likes: 95,
      comentarios: 9,
      saved: false,
    },
  ];
  


  return (
    <div >
      <Header />
      <Hero />
      <WrapperArticleContainer>
        <TitleDefault size="2.7rem">Últimos Artigos da Comunidade</TitleDefault>

        {articles.map((article, index) => (
          <ArticlePreview
            key={index}
            title={article.title}
            tags={article.tags}
            likes={article.likes}
            comentarios={article.comentarios}
            saved={article.saved}
          />
        ))}



      </WrapperArticleContainer>
      <Footer />
    </div>
  );


}
