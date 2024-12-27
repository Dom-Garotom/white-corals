import styled from "styled-components";


export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-block-size: 100vh;
  gap: 50px;
  padding-bottom: 50px;
  background-color: #131313;

  header{
    width: 100%;
  }

  h1{
    max-width: 850px;
    width: 100%;
    text-align: left;
    color: #fff;
  }

  .statusContainer{
    display: flex;
    justify-content: space-evenly;
    gap: 10px;
    max-width: 850px;
    width: 100%;
  }

  @media screen  and (max-width: 800px){
    .statusContainer{
      flex-direction: column;
      align-items: center;
      padding: 10px;
    }

    h1{
      text-align: center;
    }
  }
`;
