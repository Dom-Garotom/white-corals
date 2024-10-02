import { Wrapper , WrapperContainer , ErrorP } from "./styled-Input";
import { useState } from "react";

{/* Ele pega as props padroes do input  */ }

interface InputDefaultProps extends React.InputHTMLAttributes<HTMLElement> {
  label: string;
  icon: React.ReactNode;
  InputError?: boolean;
  mensageError?: string
}


export default function InputDefault({ label, icon, InputError, mensageError, ...props }: InputDefaultProps) {
  const [isFocus, setIsFocus] = useState(false);

  // verificar se o input está vázio ou não para manter o label no topo 

  return (
    <WrapperContainer>

      <Wrapper $InputError={InputError}>
        {icon}
        <input {...props}
          onFocus={() => setIsFocus(true)}

          required />
        <label htmlFor={props.id} style={{ transform: isFocus || props.value ? 'translateY(-30px)' : 'translateY(0px)' }}>
          {label}
        </label>
      </Wrapper>

      {InputError && 
        <ErrorP>
          {mensageError}
        </ErrorP>
      }

    </WrapperContainer>
  )
}
