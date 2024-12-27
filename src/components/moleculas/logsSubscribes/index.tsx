"use client";

import ItemLog from "@/components/atomos/itemLog";
import { DashBoardPerson } from "@/types/dashboardTypes";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 850px;
  width: 100%;
  padding: 20px;
  background-color: #ECEEF3;
  border-radius: 8px;
`;

const WrapperHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px 20px 30px 20px;

  background-color: #E2E4E5;
  border-radius: 8px 8px 0px 0px;

  p{
    font-size: 1.3rem;
    font-weight: 600;
  }
`;

const WrapperBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 0px 0px 8px 8px;
  background-color: #E2E4E5;
  padding: 10px 5px 30px 5px;
  

  .header-body{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: center;
    width: 100%;

    p{
      font-size: 0.8rem;
      font-weight: 600;
      text-align: center;
    }
  }

  .content{
    width: 100%;
    max-height: 400px;
    overflow-y: scroll;
    scrollbar-width: none;

    &::-webkit-scrollbar{
        display: none;
    }
    
  }

`;

type props = {
  logs: DashBoardPerson[]
}

export default function LogsSubscribes({ logs }: props) {
  return (
    <Wrapper>
      <WrapperHeader>
        <p>Historico de inscritos</p>
      </WrapperHeader>

      <WrapperBody>
        <div className="header-body">
          <p>NOME</p>
          <p>EMAIL</p>
          <p>NEWSLATER</p>
        </div>

        <div className="content">
          {logs.map((a, index) => ((
            <ItemLog
              key={index}
              email={a.email}
              name={a.name}
              status={a.status}
            />
          )))}
        </div>

      </WrapperBody>
    </Wrapper>
  );
};
