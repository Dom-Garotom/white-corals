import styled from "styled-components"
export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  text-align: left;
  min-block-size: 80vh;
  max-width: 550px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  border-radius: 15px;
  background-color: #ffffff;
  padding: 20px 40px;

  p{
    font-weight: 500;
    color: #121212;
  }

  a{
    font-weight: 700;
    color: #3B6AE1;
    text-decoration: none;

    &:hover{
    text-decoration: underline;
    }
  }

  button{
    width:100%;
  }

  button a {
    color: #ffffff;

    &:hover{
      text-decoration: none;
    }
  }
  
`

export const WrapperMarkBox = styled.div`
  display: flex;
  align-items: center;
  gap:5px;
  
  input[type="checkbox"]{
    width: 20px;
    height: 20px;
  }
`