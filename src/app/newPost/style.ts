import styled from "styled-components"
import BackGround from "@/public/backGround-login.png"

const Main = styled.main`
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

const ImageContainer = styled.div`
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

const Form = styled.form`
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

  .tags{
    display: flex;
    flex-wrap: wrap;
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
    border: 2px solid #B0B0B5;

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

  button.buttonSubmit{
    width: 250px;
    height: 48px;
    padding: 10px;
    border-radius: 4px;
    font-weight: 700;
    font-size: 1.2rem;
    color: #FFF ;
    background-color:#3B6AE1;
    cursor: pointer;

    &:hover{
        background-color: #3158bc;
    }
  }


  @media screen and (max-width: 500px) {
    padding: 20px 20px;


    button{
      width: 100%;
    }

    
  }
`

export const Wrapper = {
  Main: Main,
  ImageContainer: ImageContainer,
  Form: Form,
}