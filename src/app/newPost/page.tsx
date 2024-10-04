"use client"
import styled from "styled-components";
import BackGround from "@/public/backGround-login.png"
import Header from "@/components/organismos/header";
import InputDefault from "@/components/moleculas/inputDefault";
import { ButtonDefault, TitleDefault } from "@/styles/styledComponents";
import Link from "next/link";


const WrapperBody = styled.body`
  footer{
    margin: 0px;
  }
`

const WrapperMain = styled.main`
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

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-block-size: 80vh;
  max-width: 650px;
  width: 100%;
  display: flex;
  align-items: left;
  gap: 15px;
  border-radius: 15px;
  background-color: #ffffff;
  padding: 20px 40px;

  label{
    font-size: 1.5rem;
  }

  textarea{
    padding: 5px 0px;
    max-width: 650px;
    width: 100%;      
    height: 300px;
    border-radius: 10px;
    padding: 10px;
    font-size: 18px;
    font-family: "SF Mono" , sans-serif;
    border: 2px solid #000;

    &::placeholder{
      font-weight: 700;
      color: #000;
    }

  }
  
  a{
    font-weight: 700;
    color: #5c21ff;
    text-decoration: none;
    padding-left: 5px;

    &:hover{
      text-decoration: underline;
    }
  }

  input{
    border-radius: 10px;
    padding: 20px;
  }


  @media screen and (max-width: 500px) {
    padding: 20px 20px;


    button{
      width: 100%;
    }

    
  }
`

const WrapperImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 650px;
  width: 100%;
  height: 200px;
  border: 2px dashed #000;
  border-radius: 10px;

  button{
    max-width: 167px;
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


export default function NewPost() {
  return (
    <WrapperBody>
      <Header />
      <WrapperMain>
        <Wrapper>

          <WrapperImageContainer>
            <button>Adicionar Imagem</button>
          </WrapperImageContainer>

          <TitleDefault size="1.2rem">Titulo do post</TitleDefault>

          <InputDefault
            icon={''}
            label=""
            type="text"
            borderColor="#000"
          />

          <TitleDefault size="1.2rem">Adicionar tag</TitleDefault>


          <InputDefault
            icon={''}
            label=""
            type="text"
            borderColor="#000"
          />

          <textarea name="" id="" placeholder="Artigo aqui..." />

          <p>
            Nosso Criador de Post é uma ferramenta exclusiva para escritores que permite a criação de artigos utilizando a  
              <Link 
              target="_blanck" 
              href="https://github.com/adam-p/markdown-here/wiki/Markdown-Here-Cheatsheet">
                linguagem de Markdown (MD).
              </Link>
          </p>

          <ButtonDefault>Post</ButtonDefault>

        </Wrapper>



      </WrapperMain>
    </WrapperBody>
  );


}
