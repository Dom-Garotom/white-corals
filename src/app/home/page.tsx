"use client"

import styled from "styled-components";
import ArticlePreview from "@/components/organismos/articlePreview";
import Hero from "@/components/organismos/sectionHero";
import Header from "@/components/organismos/header";
import Footer from "@/components/moleculas/footer";
import { TitleDefault } from "@/styles/styledComponents";
import FilterArticles from "@/components/moleculas/filter";
import { useEffect,  useState } from "react";

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
        <TitleDefault size="2.7rem">Últimos Artigos da Comunidade</TitleDefault>

      </Wrapper>
      <WrapperArticleContainer>

        <WrapperFilter>
          {isVisble && <FilterArticles />}
        </WrapperFilter>

        <WrapperArticles>

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

        </WrapperArticles>

      </WrapperArticleContainer>
      <Footer />
    </div>
  );


}
