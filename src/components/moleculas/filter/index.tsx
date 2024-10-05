import styled from "styled-components"
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { MdOutlineGroups3 } from "react-icons/md";
import { MdGroups3 } from "react-icons/md";
import { RiTimerLine } from "react-icons/ri";
import { MdTimer } from "react-icons/md";
import { FaBookmark } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
import StatusDefault from "@/components/atomos/statusDefault";
import { useRouter } from "next/navigation";

const Wrapper = styled.div`
  width: 70px;
  height: 330px;
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

export default function FilterArticles() {
  const router = useRouter()

  return (
    <Wrapper>

      <StatusDefault
        iconDefault={<FaStar />}
        iconFull={<CiStar />}
        title="Mais populares"
      />

      <StatusDefault
        iconDefault={<MdGroups3 />}
        iconFull={<MdOutlineGroups3 />}
        title="Mais relevantes"
      />

      <StatusDefault
        iconDefault={<MdTimer />}
        iconFull={<RiTimerLine />}
        title="Recentes"
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
        handleFunction={ () => router.push("/newPost")}
      />

    </Wrapper>
  )
}
