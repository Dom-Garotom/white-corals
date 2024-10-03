"use client"
import styled from "styled-components";
import Footer from "@/components/moleculas/footer";
import BackGround from "@/public/backGround-login.png"
import InfoEvent from "@/components/moleculas/infoEvent";
import Login from "@/components/organismos/signUp";


const WrapperMain = styled.main`
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

const Wrapper = styled.body`
  footer{
    margin: 0px;
  }
`

export default function SignUpPage() {
  return (
    <Wrapper>
      <WrapperMain>
        <InfoEvent/>
        <Login/>

      </WrapperMain>
      <Footer/>
    </Wrapper>
  );


}
