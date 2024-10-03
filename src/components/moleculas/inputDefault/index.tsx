import { Wrapper , WrapperContainer , ErrorP } from "./styled-Input";
import { UseFormRegisterReturn } from "react-hook-form";
import { useState } from "react";



interface InputDefaultProps extends React.InputHTMLAttributes<HTMLElement> {
  label: string;
  icon: React.ReactNode;
  InputError?: boolean;
  mensageError?: string;
  register?: UseFormRegisterReturn;
}


export default function InputDefault({ label, icon, InputError, mensageError , register ,...props }: InputDefaultProps) {
  const [isFocus, setIsFocus] = useState(false);


  return (
    <WrapperContainer>

      <Wrapper $InputError={InputError}>
        {icon}

        <input 
          onFocus={() => setIsFocus(true)}
          {...register}
          {...props}
          required 
          />

        <label 
          htmlFor={props.id} 
          style={{ transform: isFocus || props.value ? 'translateY(-30px)' : 'translateY(0px)' }}
          >

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
