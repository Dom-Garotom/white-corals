"use client"

import ArticlePreview from '@/components/organismos/articlePreview'
import React, { useEffect } from 'react'
import { WrapperArticles } from './style'
import { useArticle } from '@/hooks/useArticle'
import { Article } from '@/types/aticle'
import { ArtiSphereApi } from '@/services/api/artisphere'

export default function ListOfAriclePreview() {
    const { articleData , setArticleData } = useArticle()

    useEffect(() => {
        const fetchArticle = async () => {
            try {
                const response = await ArtiSphereApi.get(`/articles`)
                const ArticleData: Article[] = Array.isArray(response.data) ? response.data : JSON.parse(response.data);
                setArticleData(ArticleData)
            } catch (error) {
                console.error('Erro ao carregar os artigos iniciais', error);
            } 
        }

        fetchArticle()
    }, [])

    return (
        <WrapperArticles>
            {
                articleData?.map((article, index) => (
                    <ArticlePreview
                        key={index}
                        id={article.id}
                        title={article.title}
                        tags={article.tags}
                        likes={article.num_likes}
                        comentarios={article.num_comments}
                        img={article.imageUrl}
                    />
                ))
            }
        </WrapperArticles>
    )
}
