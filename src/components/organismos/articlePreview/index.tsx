import ComentStatus from "@/components/atomos/comentStatus"
import LikeStatus from "@/components/atomos/likeStatus"
import SaveStatus from "@/components/atomos/saveStatus"
import { TagsArticles, TitleDefault } from "@/styles/styledComponents"
import styled from "styled-components"

const Wrapper = styled.div`
    display : flex;
    flex-direction: column;
    justify-content: space-between;
    height: 204px;
    max-width: 820px;
    padding: 20px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 2px 15px 30px rgba(0,0,0,0.2);
    cursor: pointer;

    h2:hover{
            color: #5b5bff;
    }
    
    @media screen and (max-width:600px) {
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
    title: string;
    tags: Tags[];
    likes: number;
    comentarios: number;
    saved?: boolean;
    img?: string;
}

interface Tags {
    color: string;
    content: string
}

export default function ArticlePreview({ title, tags, likes , comentarios , saved }: propsArticlePreview) {
    return (
        <Wrapper>
            <TitleDefault>{title}</TitleDefault>
            <WrapperTags>
                {tags.map((tag , index) => ((
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
                <SaveStatus  saved={saved!}/>
            </WrapperStatus>

        </Wrapper>
    )
}
