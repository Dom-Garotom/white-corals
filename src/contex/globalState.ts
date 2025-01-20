'use client'

import { Article } from '@/types/aticle';
import { createContext, Dispatch, SetStateAction } from 'react'

type ArticleContextType = {
    articleData : Article[],
    setArticleData : Dispatch<SetStateAction<Article[]>>
};

export const ArticleContext = createContext<ArticleContextType | undefined>(undefined)

