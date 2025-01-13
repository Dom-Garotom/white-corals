import styled from "styled-components";

export const Wrapper = styled.div`
  width: 70px;
  min-height: 250px;
  max-height: 310px;
  height: 100%;
  padding: 10px;
  border-radius: 10px;
  
  @media screen and (max-width: 1000px) {
    display: flex;
    width: 100%;
    height: 70px;
    justify-content: space-around;
  }

  @media screen and ( maxWidth: 500px ){
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    background-color: #fff;
  }
  
`

