import ComentStatus from "@/components/atomos/comentStatus"
import LikeStatus from "@/components/atomos/likeStatus"
import SaveStatus from "@/components/atomos/saveStatus"
import { TagsArticles, TitleDefault } from "@/styles/styledComponents"
import Image from "next/image"
import Link from "next/link"
import styled from "styled-components"


const WrapperContainer = styled.div`
    max-width: 820px;
    width: 100%;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 2px 15px 30px rgba(0,0,0,0.2);
    cursor: pointer;
    margin: 5px 0px;
    height: 100%;

    img{
        border-radius: 10px 10px 0px 0px ;
        width: 100%;
    }

    @media screen and (max-width: 600px) {
        img{
            height: 200px;
        }
    }
`

const Wrapper = styled.div`
    width: 100%;
    display : flex;
    flex-direction: column;
    justify-content: space-between;
    height: 204px;
    max-width: 820px;
    padding: 20px;
    
    h2:hover{
        color: #5b5bff;
    }

    a{
        text-decoration: none;
    }
    
    @media screen and (max-width:600px) {
        justify-content: start;
        gap: 10px;
        
        h2{
            font-size: 20px;
        }


        p{
            font-size: 14px;
        }

        padding: 16px;
        height: 100%;

    }
`

const WrapperTags = styled.div`
    display: flex;
    flex-wrap: wrap;
`
const WrapperStatus = styled.div`
    display: flex;
     div{
        display:flex;
        flex:1;
     }
`

type propsArticlePreview = {
    id: string;
    title: string;
    tags: {
        color: string;
        content: string;
    }[];
    likes: number;
    comentarios: number;
    saved?: boolean;
    img?: string;
}


export default function ArticlePreview({ title, tags, likes, comentarios, saved, id , img }: propsArticlePreview) {
    return (
        <WrapperContainer>
            {img ? <Image src={img} alt="Imagem do artigo" width="600" height="239"/> : ""}

            <Wrapper>
                <Link href={`/article/${id}`}>
                    <TitleDefault>{title}</TitleDefault>
                </Link>

                <WrapperTags>
                    {tags.map((tag, index) => ((
                        <TagsArticles
                            key={index}
                            color={tag.color}>
                            {tag.content}
                        </TagsArticles>
                    )))}
                </WrapperTags>

                <WrapperStatus>
                    <div>
                        <LikeStatus numberLikes={likes} />
                        <ComentStatus numberComent={comentarios} />
                    </div>
                    <SaveStatus saved={saved!} />
                </WrapperStatus>

            </Wrapper>
        </WrapperContainer>
    )
}
