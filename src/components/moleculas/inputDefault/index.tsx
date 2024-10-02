import styled from "styled-components"
import { useState } from "react";
const Wrapper = styled.div`

    display: flex;
    align-items: center;
    border-radius: 15px;
    padding: 5px 0px;
    max-width: 500px;
    width: 100%;      

    svg{
      font-size: 1.3rem;
      margin-left: 8px;
      position: absolute;
      color: #bdbdc3;
    }

    label{
      position: absolute;
      z-index: 1111;
      margin-left: 30px;
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
      padding-left: 30px;
      outline: none;
      transition: 0.3s ease;
      border: 2px solid #b0b0b5;
      background-color: transparent;
      border-radius: 10px;
      
      &:focus,
      &:valid {
        border: 2px solid #3b6ae1;
      }
  
      &:focus + label,
      &:valid + label {
        font-size: 0.8rem;
        color: #3b6ae1;
      }
  }
`
{/* Ele pega as props padroes do input  */ }

interface InputDefaultProps extends React.InputHTMLAttributes<HTMLElement> {
    label: string;
    icon: React.ReactNode;
}


export default function InputDefault({ label, icon, ...props }: InputDefaultProps) {
  const [isFocus , setIsFocus] = useState(false);

  // verificar se o input está vázio ou não para manter o label no topo 
  
    return (
        <Wrapper>
            {icon}
            <input {...props} 
              onFocus={ () => setIsFocus(true)}
              required />
            <label htmlFor={props.id} style={ { transform : isFocus || props.value ? 'translateY(-22px)' : 'translateY(0px)'} }>
              {label}
            </label>
        </Wrapper>
    )
}
