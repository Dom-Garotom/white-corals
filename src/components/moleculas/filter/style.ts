import styled from "styled-components";

export const Wrapper = styled.div`
  width: 70px;
  height: 330px;
  background-color: #fff;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 1000px) {
    display: flex;
    width: 100%;
    height: 70px;
    justify-content: space-around;
  }
`