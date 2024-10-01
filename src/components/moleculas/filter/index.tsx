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

const Wrapper = styled.div`
  background-color: #fff;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 760px) {
    display: flex;
    width: 100%;
    justify-content: space-around;
  }
`

export default function FilterArticles() {
  return (
    <Wrapper>

      <StatusDefault
        iconDefault={<FaStar />}
        iconFull={<CiStar />}
      />

      <StatusDefault
        iconDefault={<MdGroups3 />}
        iconFull={<MdOutlineGroups3 />}
      />

      <StatusDefault
        iconDefault={<MdTimer />}
        iconFull={<RiTimerLine />}
      />

      <StatusDefault
        iconDefault={<FaBookmark />}
        iconFull={<FaRegBookmark />}
      />

      <StatusDefault
        iconDefault={<FaPlus />}
        iconFull={<FaPlus />}
      />

    </Wrapper>
  )
}
