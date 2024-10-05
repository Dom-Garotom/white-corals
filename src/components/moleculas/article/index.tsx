import { TagsArticles, TitleDefault } from "@/styles/styledComponents"
import Image from "next/image"
import styled from "styled-components"
import img from "@/public/hero-BackGround.png"
import { marked } from "marked"
import { useEffect, useState } from "react"


const WrapperMain = styled.div`
    background-color: #fff;
    max-width: 850px;
    width: 100%;
    border-radius: 10px;
    box-shadow: 4px 4px 7px 4px rgba(0, 0, 0, 0.1);

    img{
        max-width: 850px;
        width: 100%;
        height: 338px;
        border-radius: 10px 10px 0px 0px;
    }
`

const WrapperHeader = styled.div`
    background-color: #fff;
    padding: 32px 64px;

    div{
        display: flex;
        flex-wrap: wrap;
    }

    @media screen and (max-width: 800px) {
        padding: 20px;
    }
`


const WrapperBody = styled.div`
    background-color: #fff;
    max-width: 850px;
    width: 100%;
    min-block-size: 50vh;
    border-radius: 0px 0px 10px 10px;
    padding: 32px 64px;


    h2{
        font-size: 2.3rem;
        padding: 10px 0px;
        color: #171717;
        font-weight: 600;
    }

    p , li{
        font-size: 20px;
        font-weight: 300;
        font-family: Roboto , sans-serif;
        margin-bottom: 10px;
        color: #313131;
    }

    ul , ol{
        margin: 10px 0px;
        margin-left: 20px;
    }

    @media screen and (max-width: 800px) {
        padding: 20px;
    }
`

type Props = {
    id: string;
    title: string;
    article: string;
    tags?: {
        color: string;
        content: string;
    }[];
}

export default function Article({ title, article , tags }: Props) {
    const [htmlContent, setHtmlContent] = useState<string | Promise<string> | undefined>();

    useEffect(() => {

        const handleArticle = async () => {
            const html = marked(article);
            await setHtmlContent(html);
        }

        handleArticle();
    })

    return (
        <WrapperMain>
            <Image src={img} alt="Cover do artigo" />
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
