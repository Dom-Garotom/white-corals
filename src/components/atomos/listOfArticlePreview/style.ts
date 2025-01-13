import styled from "styled-components";

export const WrapperArticles = styled.div`
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  min-block-size: 80vh;
  gap: 10px;

  @media (max-width: 1000px) {
    align-items: center;
  }
`