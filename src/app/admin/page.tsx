"use client"

import Header from "@/components/organismos/header";
import DashboardStatus from "@/components/moleculas/dashBoardStatus";
import LogsSubscribes from "@/components/moleculas/logsSubscribes";
import LogsArticles from "@/components/moleculas/logsArticles";
import { dataBase, dataBasePerson, myDataBase } from "@/db";
import { useEffect, useState } from "react";
import { TitleMain } from "@/styles/styledComponents";
import { DashBoardArticle, DashBoardPerson } from "@/types/dashboardTypes";
import { Wrapper } from "./style";


export default function Page() {
  const [logsArticle, setLogsArticle] = useState<DashBoardArticle[]>([]);
  const [logsPerson, setLogsPerson] = useState<DashBoardPerson[]>([]);

  const getAllArticleLogs = () => {
    const articleLogs = dataBase.map((article) => (({
      id: article.id,
      name: article.title
    })))

    const userArticleLogs = myDataBase.map((article) => (({
      id: article.id,
      name: article.title
    })))

    const bancoDeDados = [...articleLogs, ...userArticleLogs];

    setLogsArticle(bancoDeDados)
  }

  const getAllPersonLogs = () => {
    const personLogs = dataBasePerson.map((article) => (({
      email: article.email,
      name: article.nome,
      status: article.aceptEmail
    })))

    setLogsPerson(personLogs)
  }

  useEffect(() => {
    getAllArticleLogs();
    getAllPersonLogs();
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
