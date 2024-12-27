import { ArticleTag } from "@/styles/styledComponents"
import Image from "next/image"
import { marked } from "marked"
import { useEffect, useState } from "react"
import { Wrapper } from "./style"

type Props = {
    id: string;
    title: string;
    article: string;
    image?: string;
    tags?: {
        color: string;
        content: string;
    }[];
}

export default function Article({ title, article , tags , image }: Props) {
    const [htmlContent, setHtmlContent] = useState<string>("");

    useEffect(() => {
        const html = marked(article) as string;
        setHtmlContent(html);
    }, [article])

    return (
        <Wrapper.Root>
            
            { image &&  <Image src={image} alt="Cover do artigo" width={900} height={300} />}

            <Wrapper.Header>
                <h1>{title}</h1>

                <div>
                    {tags?.map(( Element , index) =>(
                        <ArticleTag 
                        color={Element.color}
                        key={index}>
                            {Element.content}
                        </ArticleTag>
                    ))}
                </div>

            </Wrapper.Header>
            <Wrapper.Body>
                <p dangerouslySetInnerHTML={{ __html: htmlContent }} />
            </Wrapper.Body>
        </Wrapper.Root>
    )
}
