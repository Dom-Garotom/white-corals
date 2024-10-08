"use client"

import styled from "styled-components"
import Footer from "@/components/moleculas/footer"
import Header from "@/components/organismos/header"
import Article from "@/components/moleculas/article"
import StatusBar from "@/components/moleculas/statusBar"
import { useParams } from "next/navigation"
import { DataBase, dataBase } from "@/db"
import { useEffect, useState } from "react"

const Wrapper = styled.main`

`

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
  display: flex;
  justify-content: end;
  padding: 20px;

  .container{
    position: fixed;
  }


  @media screen and (max-width: 1000px) {
    grid-column: 1 / -1;
    justify-content: center;
    padding: 10px;
    
    .container{
      width: 95%;
      position: fixed;
      top: 30px;
      top: 92%;
      
    }
  
  }

`


export default function ArticlesPage() {
  const { id } = useParams();
  const [dataArticle, setDataArticle] = useState<DataBase>();

  useEffect(() => {
    const getLocalStorage = () => {

      const getLocalStorage = JSON.parse(String(localStorage.getItem("article")));

      let dataLocalStorage = [];

      dataLocalStorage = Array.isArray(getLocalStorage) ? getLocalStorage : [];

      dataBase.map(elemnt => {
        dataLocalStorage.push(elemnt);
      })

      const dataArticle = dataLocalStorage.find(element => element.id === id);

      setDataArticle(dataArticle);
    }

    getLocalStorage();

  })

  if (!dataArticle) {
    return <p>Article not found</p>;
  }

  return (
    <Wrapper>
      <Header />

      <WrapperArticleContainer>

        <WrapperFilter>
          <div className="container">
            <StatusBar likes={dataArticle.likes} comentarios={dataArticle.comentarios} />
          </div>
        </WrapperFilter>

        <WrapperArticles>

          <Article
            id={dataArticle.id}
            image={dataArticle.image}
            article={dataArticle.article}
            title={dataArticle.title}
            tags={dataArticle.tags}
          />

        </WrapperArticles>

      </WrapperArticleContainer>

      <Footer />
    </Wrapper>
  )
}
