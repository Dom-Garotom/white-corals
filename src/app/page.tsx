"use client"
import styled from "styled-components";
import Footer from "@/components/moleculas/footer";
import BackGround from "@/public/backGround-login.png"
import InfoEvent from "@/components/moleculas/infoEvent";
import SignUp from "@/components/organismos/signUp";
import { Toaster } from "sonner";


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

const Wrapper = styled.div`
  footer{
    margin: 0;
  }
`



export default function SignUpPage( ) {

  return (
    <Wrapper>
      <WrapperMain>
        <InfoEvent />
        <SignUp />
        <Toaster toastOptions={{
          style: {
            padding: "10px",
            fontSize: "1.2rem",
            color: "green",
          }
        }} />
      </WrapperMain>
      <Footer />
    </Wrapper>
  );


}
