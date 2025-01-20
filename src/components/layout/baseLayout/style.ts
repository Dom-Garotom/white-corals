import styled from "styled-components"


const Root = styled.div``

const ArticleContainer = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 2fr minmax(300px, 800px) 2fr;
  padding: 20px;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    padding: 20px 0px ;
  }
  `

const Article = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1 0 auto;

  @media (max-width: 1000px) {
    align-items: center;
  }
`

const FilterBar = styled.div`
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
    padding: 0px;


    
    .container{
      width: 100%;
      height: 40px;
      bottom : 30px;
      top: 92%;
    }
  
  }

`

export const Wrapper = {
    root : Root,
    ArticleContainer : ArticleContainer,
    Article : Article,
    FilterBar : FilterBar,
}