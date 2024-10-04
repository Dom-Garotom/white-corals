import styled from "styled-components"
import BackGround from "@/public/backGround-login.png"

export const WrapperBody = styled.body`
  footer{
    margin: 0px;
  }
`

export const WrapperMain = styled.main`
  background-image: url(${BackGround.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  min-block-size: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  padding: 20px;

  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`

export const WrapperImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 650px;
  width: 100%;
  height: 200px;
  border: 2px dashed #000;
  border-radius: 10px;
  padding: 20px;

  button{
    max-width: 257px;
    width: 100%;
    height: 50px;
    color: #171717;
    font-weight: 600;
    background-color: #fff;
    border: 2px solid #D6D6D7;
    padding: 10px;
    border-radius: 7px;
    cursor: pointer;

    &:hover{
      background-color: #dddde6;
    }
  }
  


`