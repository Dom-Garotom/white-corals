import styled from "styled-components"

type propsInput = {
  $InputError?: boolean;
}

export const Wrapper = styled.div<propsInput>`

    display: flex;
    align-items: center;
    padding: 5px 0px;
    max-width: 500px;
    width: 100%;      

    svg{
      font-size: 1.3rem;
      margin-left: 15px;
      position: absolute;
      color: "#625d5d";
    }

    label{
      position: absolute;
      z-index: 1111;
      margin-left: 40px;
      padding: 2px;
      font-size: 1rem;
      transition: 0.3s ease;
      pointer-events: none;
      background-color: #fff;
      color : #343030;
      transform: translateY(0); 
    }
      
    input {
      position: relative;
      display: flex;
      flex: 1;
      height: 45px;
      max-width: 500px;
      width: 100%;
      font-size: 1rem;
      padding: 30px;
      padding-left: 45px;
      outline: none;
      transition: 0.3s ease;
      border: 2px solid #b0b0b5;
      background-color: transparent;
      border-radius: 20px;
      
      &:focus,
      &:valid {
        border: 2px solid ${props => props.$InputError ? "#e13b57" : "#3b6ae1"};
      }
  
      &:focus + label,
      &:valid + label {
        font-size: 0.8rem;
        color: ${props => props.$InputError ? "#e13b57" : "#3b6ae1"};
      }

     
  }
`

export const WrapperContainer = styled.div`
  width: 100%;

`

export const ErrorP = styled.p`
  color:#e13b57;
  margin-left: 10px ;
  font-size: 0.9rem;
  
`