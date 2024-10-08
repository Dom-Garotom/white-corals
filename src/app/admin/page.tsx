"use client"

import Header from "@/components/organismos/header";
import styled from "styled-components";
import DashboardStatus from "@/components/moleculas/dashBoardStatus";
import LogsSubscribes from "@/components/moleculas/logsSubscribes";
import LogsArticles from "@/components/moleculas/logsArticles";
import { dataBase, dataBasePerson, myDataBase } from "@/db";
import { useEffect, useState } from "react";
import { TitleMain } from "@/styles/styledComponents";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-block-size: 100vh;
  gap: 50px;
  padding-bottom: 50px;
  background-color: #131313;

  header{
    width: 100%;
  }

  h1{
    max-width: 850px;
    width: 100%;
    text-align: left;
    color: #fff;
  }

  .statusContainer{
    display: flex;
    justify-content: space-evenly;
    gap: 10px;
    max-width: 850px;
    width: 100%;
  }

  @media screen  and (max-width: 800px){
    .statusContainer{
      flex-direction: column;
      align-items: center;
      padding: 10px;
    }

    h1{
      text-align: center;
    }
  }
`;

// type DataBasePerson = {
//   "name": string,
//   "email": string,
//   "aceptEmail": boolean
// }

// type DataBase = {
//   id: string;
//   title: string;
//   article: string;
//   tags: {
//     content: string;
//     color: string;
//   }[];
//   likes: number;
//   comentarios: number;
//   saved: boolean;
//   image?: string;
// }

type article = {
  id: string,
  name: string
}

type person = {
  email: string;
  name: string;
  status: boolean
}


export default function Page() {
  const [logsArticle, setLogsArticle] = useState<article[]>([]);
  const [logsPerson, setLogsPerson] = useState<person[]>([]);

  useEffect(() => {
    // const locaStorage = localStorage.getItem("article");
    // const content: DataBase[] = locaStorage ? JSON.parse(locaStorage) : [];


    // const localContent = content.map((article) => (({
    //   id: article.id,
    //   name: article.title
    // })))


    const db = dataBase.map((article) => (({
      id: article.id,
      name: article.title
    })))

    const myDb = myDataBase.map((article) => (({
      id: article.id,
      name: article.title
    })))

    const bancoDeDados = [...db , ...myDb];

    setLogsArticle(bancoDeDados)

  }, [])


  useEffect(() => {
    // const locaStorage = localStorage.getItem("user");
    // const content: DataBasePerson[] = locaStorage ? JSON.parse(locaStorage) : [];


    // const localContent = content.map((article) => (({
    //   email: article.email,
    //   name: article.name,
    //   status: article.aceptEmail
    // })))


    const db = dataBasePerson.map((article) => (({
      email: article.email,
      name: article.nome,
      status: article.aceptEmail
    })))

    const bancoDeDados = [...db];

    setLogsPerson(bancoDeDados)

  }, [])

  return (
    <Wrapper>
      <Header />

      <TitleMain>Dashboard</TitleMain>

      <div className="statusContainer">
        <DashboardStatus title="Inscritos no evento" number={logsPerson.length} description="pessoas" />
        <DashboardStatus title="Artigos submetidos" number={logsArticle.length} description="artigos" />
      </div>

      <LogsArticles
        logs={logsArticle}
      />

      <LogsSubscribes
        logs={logsPerson}
      />

    </Wrapper>
  )
}
