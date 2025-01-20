import styled from "styled-components";

type ButtonProps = {
    secondary?: boolean;
    lock?: boolean;
    block ?: boolean
};

export const ButtontoTop = styled.button<ButtonProps>`
    position: fixed; 
    bottom: 20px; 
    right: 30px; 

    width: 50px;
    height: 50px;
    background-color: #1a1822;
    color: #fff;
    border-radius: 12px;

    svg{
        font-size: 1.3rem;
    }

    &:hover{
        background-color: #fff;
        transition: all 200ms;
        color: #1a1822;
    }

    pointer-events: ${(props) => (props.block ? 'auto' : 'none')};
    opacity: ${(props) => (props.block ? '1' : '0')};
    transform: ${(props) => (props.block ? 'translateY(0)' : 'translateY(1rem)')};
    transition: opacity 0.20s ease, transform 0.60s ease;

    @media screen and (max-width: 500px ) {
      bottom: 90px;
    }
`