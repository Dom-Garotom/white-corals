"use client";

import Link from "next/link";
import styled from "styled-components";

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr ;
    justify-content: center;
    width: 100%;
    padding: 10px 0px;
    border-bottom: 2px solid #d5cdcd73;

    a{
        font-weight: 500;
        text-decoration: none;
        color: #9b7ef2;
    }

    p{
    font-size: 0.8rem;
    font-weight: 600;
    text-align: center;
    }
`;

type propsLogSubscribes = {
    name: string;
    id: string;
}

export default function ItemLogArticles({ id, name }: propsLogSubscribes) {
    return (
        <Wrapper>
                <p>{name}</p>
            <Link href={`/article/${id}`}>
                <p>{id}</p>
            </Link>
        </Wrapper>
    );
};
