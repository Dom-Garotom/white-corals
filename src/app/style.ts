import styled from "styled-components";
import BackGround from "@/public/backGround-login.png"


const Main = styled.main`
  background-image: url(${BackGround.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  min-block-size: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  padding: 20px;

  @media screen and (max-width: 800px) {
    flex-direction: column;
  }

`

const wrapper = styled.div`
  footer{
    margin: 0;
  }
`

export const Wrapper = {
    Main : Main,
    Root: wrapper
}