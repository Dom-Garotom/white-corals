"use client";

import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 350px;
  width: 100%;
  padding: 20px;

  .title{
    font-size: 1.3rem;
    font-weight: 600;
  }
  .number{
    font-size: 3rem;
    font-weight: 700;
    color: #212427;
    font-family: Roboto , sans-serif  ;
  }

  .description{
    font-size: 1.3rem;
    padding: 0.5rem 0px;
    font-weight: 600;
    color: #212427;
  }

  div{
    display: flex;
    gap: 10px;
    align-items: end;
    padding: 15px 0px 0px 0px;
  }

  background-color: #ECEEF3;
  border-radius: 8px;
`;

type propsDashboardStatus = {
  title: string;
  number : number;
  description: string;
}

export default function DashboardStatus ( { title , number , description} : propsDashboardStatus) {
  return (
    <Wrapper>
      <p className="title">{title}</p>
      <div>
        <p className="number">{number}</p>
        <p className="description">{description}</p>
      </div>
    </Wrapper>
  );
};
