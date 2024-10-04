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
  const dataObjects = [
    {
        id: "1a2b3c4d-5e6f-7g8h-9i0j-k1l2m3n4o5p6", // UUID gerado
        title: "A Importância da Sustentabilidade",
        article: "Neste artigo, discutiremos as práticas sustentáveis que podem ser adotadas para preservar o meio ambiente.",
        tags: [
            { color: "#ffcc00", content: "Sustentabilidade" },
            { color: "#00ffcc", content: "Meio Ambiente" },
            { color: "#ff6699", content: "Desenvolvimento" },
        ],
        likes: 120,
        comentarios: 45,
        saved: true,
    },
    {
        id: "2b3c4d5e-6f7g-8h9i-0j1k-l2m3n4o5p6q7", // UUID gerado
        title: "Tecnologias Emergentes",
        article: "As tecnologias emergentes estão mudando a forma como vivemos e trabalhamos. Vamos explorar algumas delas.",
        tags: [
            { color: "#ff6699", content: "Tecnologia" },
            { color: "#00ccff", content: "Inovação" },
            { color: "#ffcc00", content: "Futuro" },
        ],
        likes: 75,
        comentarios: 10,
        saved: false,
    },
    {
        id: "3c4d5e6f-7g8h-9i0j-k1l2-m3n4o5p6q7r8", // UUID gerado
        title: "A História da Programação",
        article: "A programação evoluiu rapidamente ao longo das décadas. Vamos revisar sua história e impacto.",
        tags: [
            { color: "#00ffcc", content: "Programação" },
            { color: "#ff6699", content: "História" },
            { color: "#ffcc00", content: "Educação" },
        ],
        likes: 200,
        comentarios: 100,
        saved: true,
    },
    {
        id: "4d5e6f7g-8h9i-0j1k-l2m3-n4o5p6q7r8s9", // UUID gerado
        title: "O Impacto das Mídias Sociais",
        article: "As mídias sociais têm um papel significativo na sociedade moderna. Vamos discutir os prós e contras.",
        tags: [
            { color: "#ffcc00", content: "Mídias Sociais" },
            { color: "#00ccff", content: "Comunicação" },
            { color: "#ff6699", content: "Sociedade" },
        ],
        likes: 150,
        comentarios: 30,
        saved: false,
    },
];

  
  const getLocalStorage = JSON.parse(String(localStorage.getItem("article")));

  let  dataLocalStorage = [];

  dataLocalStorage = Array.isArray(getLocalStorage) ? getLocalStorage : [];

  dataObjects.map( elemnt =>{
    dataLocalStorage.push(elemnt);
  })


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

          {dataLocalStorage.map((article, index) => (
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
