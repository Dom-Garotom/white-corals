"use client";

import styled from "styled-components";

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: center;
    width: 100%;
    padding: 10px 0px;
    border-bottom: 2px solid #d5cdcd73;

    p{
    font-size: 0.8rem;
    font-weight: 600;
    text-align: center;
    }
`;

type propsLogSubscribes = {
    name: string;
    email: string;
    status: boolean;
}

export default function ItemLog({ email, name, status }: propsLogSubscribes) {
    return (
        <Wrapper>
            <p>{name}</p>
            <p>{email}</p>
            <p>{status ? "ACEITO" : "NEGADO"}</p>
        </Wrapper>
    );
};
