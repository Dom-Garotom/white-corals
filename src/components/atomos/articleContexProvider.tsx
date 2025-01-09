"use client" 

import { ArticleContext } from "@/contex/globalState"
import { Article } from "@/types/aticle"
import { ReactNode, useState } from "react"

export function ArticleContextProvider({ children }: { children: ReactNode }) {
    const [articleData, setArticleData] = useState<Article[]>([])

    return (
        <ArticleContext.Provider value={{ articleData, setArticleData }}>
            { children }
        </ArticleContext.Provider>
    )
}