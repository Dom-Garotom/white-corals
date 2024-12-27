import React from 'react'
import { ArticleTag } from "@/styles/styledComponents";
import { ArticleTags } from '@/types/articleSchema';

type TagsProps = {
    tags : ArticleTags
}


export default function TagsList( { tags } : TagsProps) {
    return (
        <div className="tags">
            {tags.map((tag, index) => (
                <ArticleTag key={index} color={tag.color} >{tag.content}</ArticleTag>
            ))}
        </div>
    )
}
