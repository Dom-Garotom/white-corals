"use client"

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useArticle } from "@/hooks/useArticle";
import { Article } from "@/types/aticle";
import { ArtiSphereApi } from "@/services/api/artisphere";
import { handleScroll } from "@/utils/handleScroll";
import Filter from "../filter";

import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { MdOutlineGroups3 } from "react-icons/md";
import { MdGroups3 } from "react-icons/md";
import { RiTimerLine } from "react-icons/ri";
import { MdTimer } from "react-icons/md";
import { FaBookmark } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";


export default function FilterArticles() {
  const [isVisble, setIsVisible] = useState(false);
  const router = useRouter()
  const { setArticleData } = useArticle();


  const FetchArticle = async (path: string) => {
    const response = await ArtiSphereApi.get(`/${path}`)
    const ArticleData: Article[] = Array.isArray(response.data) ? response.data : JSON.parse(response.data);
    setArticleData(ArticleData)
  }

  const scroll = () => {
    setIsVisible(handleScroll)
  }

  useEffect(() => { 
    window.addEventListener("scroll", scroll);

    return () => {
      window.removeEventListener("scroll", scroll)
    }
  }, [])


  if (!isVisble) {
    return
  }


  return (
    <Filter>

      <Filter.Item
        iconDefault={<FaStar />}
        iconFull={<CiStar />}
        title="Mais populares"
        onClick={() => FetchArticle("mostPopular")}
      />

      <Filter.Item
        iconDefault={<MdGroups3 />}
        iconFull={<MdOutlineGroups3 />}
        title="Mais relevantes"
        onClick={() => FetchArticle("mostRelevant")}
      />

      <Filter.Item
        iconDefault={<MdTimer />}
        iconFull={<RiTimerLine />}
        title="Recentes"
        onClick={() => FetchArticle("mostRecent")}
      />

      <Filter.Item
        iconDefault={<FaBookmark />}
        iconFull={<FaRegBookmark />}
        title="Salvos"
      />

      <Filter.Item
        iconDefault={<FaPlus />}
        iconFull={<FaPlus />}
        title="Criar um post"
        onClick={() => router.push("/newPost")}
      />

    </Filter>
  )
}
