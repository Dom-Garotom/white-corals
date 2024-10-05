import styled from "styled-components"
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
import { AiOutlineComment } from "react-icons/ai";
import StatusDefault from "@/components/atomos/statusDefault";

const Wrapper = styled.div`
  width: 70px;
  min-height: 250px;
  max-height: 310px;
  height: 100%;
  background-color: #fff;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 1000px) {
    display: flex;
    width: 100%;
    height: 70px;
    justify-content: space-around;
  }
`

type Props = {
    likes: number;
    comentarios: number;
}


export default function StatusBar( {likes , comentarios} : Props) {
    return (
        <Wrapper>

            <StatusDefault
                iconDefault={<FaStar />}
                iconFull={<CiStar />}
                title="Likes"
                number={likes}
            />

            <StatusDefault
                iconDefault={<AiOutlineComment />}
                iconFull={<AiOutlineComment />}
                title="Comentarios"
                number={comentarios}
            />

            <StatusDefault
                iconDefault={<FaBookmark />}
                iconFull={<FaRegBookmark />}
                title="Salvos"
            />

            <StatusDefault
                iconDefault={<FaPlus />}
                iconFull={<FaPlus />}
                title="Criar um post"
            />

        </Wrapper>
    )
}
