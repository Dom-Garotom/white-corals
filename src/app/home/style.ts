import styled from "styled-components";

const ArticleContainer = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 2fr minmax(350px, 800px) 2fr;
  padding: 20px;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
  `

const Articles = styled.div`
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  min-block-size: 80vh;
  gap: 10px;

  @media (max-width: 1000px) {
    align-items: center;
  }
`

const Filter = styled.div`
  position: relative;
  display: flex;
  justify-content: end;
  padding: 20px;

  .container{
    position: fixed;
    top: 100px;
  }

  @media screen and (max-width: 1000px) {
    grid-column: 1 / -1;
    justify-content: center;
    padding: 10px;
    
    .container{
      width: 95%;
      position: fixed;
      top: 30px;
      top: 92%;
      
    }
  
  }

`

const wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0px 20px;

  @media screen and (max-width: 700px) {
    h2{
      font-size: 2rem;
    }
  }
`

export const Wrapper = {
    Root: wrapper,
    Filter: Filter,
    Articles: Articles,
    ArticleContainer: ArticleContainer
}