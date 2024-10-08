import { TagsArticles, TitleDefault } from "@/styles/styledComponents"
import Image from "next/image"
import styled from "styled-components"
import { marked } from "marked"
import { useEffect, useState } from "react"


const WrapperMain = styled.div`
    background-color: #fff;
    max-width: 850px;
    width: 100%;
    border-radius: 10px;
    box-shadow: 4px 4px 7px 4px rgba(0, 0, 0, 0.1);

    img{
        max-width: 100%;
        width: 100%;
        height: 338px;
        border-radius: 12px 12px 0px 0px;
        object-fit: cover;
    }
`

const WrapperHeader = styled.div`
    background-color: #fff;
    padding: 32px 64px;

    div{
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        margin-top: 12px;
    }

    @media screen and (max-width: 800px) {
        padding: 20px;
    }
`


const WrapperBody = styled.div`
    background-color: #fff;
    width: 100%;
    min-block-size: 50vh;
    border-radius: 0px 0px 12px 12px;
    padding: 32px 64px;


    h2{
        font-size: 2.3rem;
        margin-bottom: 10px;
        color: #171717;
        font-weight: 600;
    }

    p , li{
        font-size: 20px;
        line-height: 1.6;
        font-weight: 300;
        font-family: "Roboto" , sans-serif;
        margin-bottom: 10px;
        color: #313131;
    }

    ul , ol{
        margin: 10px 0px;
        margin-left: 16px;
    }

    @media screen and (max-width: 800px) {
        padding: 20px;
    }
`

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
        const html = marked(article);
        setHtmlContent(html);
    }, [article])

    return (
        <WrapperMain>
            { image &&  <Image src={image} alt="Cover do artigo" width={900} height={300} />}
            <WrapperHeader>
                <TitleDefault size="3.2rem">{title}</TitleDefault>

                <div>
                    {tags?.map(( Element , index) =>(
                        <TagsArticles 
                        color={Element.color}
                        key={index}>
                            {Element.content}
                        </TagsArticles>
                    ))}
                </div>

            </WrapperHeader>
            <WrapperBody>
                <p dangerouslySetInnerHTML={{ __html: htmlContent }} />
            </WrapperBody>
        </WrapperMain>
    )
}
