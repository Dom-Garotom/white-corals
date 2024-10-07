import { BiChevronUp } from "react-icons/bi";
import { useEffect, useState } from "react";
import styled from "styled-components";

type ButtonProps = {
    secondary?: boolean;
    lock?: boolean;
    block ?: boolean
};

const ButtontoTop = styled.button<ButtonProps>`
    position: fixed; 
    bottom: 20px; 
    right: 30px; 

    width: 50px;
    height: 50px;
    background-color: #1a1822;
    color: #fff;
    border-radius: 12px;

    svg{
        font-size: 1.3rem;
    }

    &:hover{
        background-color: #fff;
        transition: all 200ms;
        color: #1a1822;
    }

    pointer-events: ${(props) => (props.block ? 'auto' : 'none')};
    opacity: ${(props) => (props.block ? '1' : '0')};
    transform: ${(props) => (props.block ? 'translateY(0)' : 'translateY(1rem)')};
    transition: opacity 0.20s ease, transform 0.60s ease;
`

export default function ButtonTop() {
  const [isBlock, setIsBlock] = useState(false);

  const toTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    })
  }

  useEffect(() => {
    const handleScroll = () =>{
      const scrollTop = document.documentElement.scrollTop;
      const scroll = (100 * scrollTop ) / (document.documentElement.scrollHeight - document.documentElement.clientHeight)
  
      if (scroll > 20) {
        setIsBlock(true);
      } else {
        setIsBlock(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () =>{
      window.removeEventListener("scroll", handleScroll)
    }

  }, )


return (
  <ButtontoTop
    onClick={() => toTop()}
    block={isBlock}
  >
    <BiChevronUp />
  </ButtontoTop>
)
}