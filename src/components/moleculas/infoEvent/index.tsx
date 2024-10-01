import { TitleMain } from "@/styles/styledComponents"
import styled from "styled-components"
import { FaCheck } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import { FaBuilding } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { TbClockHour12 } from "react-icons/tb";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 500px;
    width: 100%;

    h1{
        color: #F5F5F5;
        
        b{
            font-weight: 900;
        }
    }

    b{
        color: #3B6AE1;
        font-weight: 700;
    }

    p{
        color: #F5F5F5;
    }

    li{
        color: #F5F5F5;
        list-style: none;
        padding: 5px 0px;

        svg{
            margin-right: 10px;
            font-size: 1.5rem;
        }
    }

    svg{
        color: #F5F5F5;
    }

    div{
        display: flex;
        align-items: center;
        gap: 15px;
    }

    button{
        width: 40px;
        height: 40px;
        padding: 10px;
        background-color: #3B6AE1;
        border-radius: 50%;
    }
`

export default function InfoEvent() {
    return (
        <Wrapper>
            <TitleMain ><b>COMBATA:</b> Branqueamento de Corais</TitleMain>
            <p>
                Descubra os impactos <b>devastadores do branqueamento de corais</b>  e saiba como você pode fazer a diferença.
                Participe do nosso evento e ajude a preservar os recifes de coral,<b> um tesouro marinho em perigo.</b>
            </p>

            <ul>
                <li>
                    <HiUserGroup />
                    Qualquer um pode participar
                </li>
                <li>
                    <FaBuilding />
                    Remoto
                </li>
                <li>
                    <MdDateRange />
                    13/03/2022
                </li>

                <li>
                    <TbClockHour12 />
                    13:30 ~ 16:30
                </li>
            </ul>

            <div>
                <div>
                    <button>
                        <FaCheck />
                    </button>
                    <span>
                        <b>+2.134</b>
                        <p>artigos inscritos</p>
                    </span>
                </div>

                <div>
                    <button>
                        <FaCheck />
                    </button>
                    <span>
                        <b>+343.432</b>
                        <p>pessoas inscritas</p>
                    </span>
                </div>
            </div>

        </Wrapper>
    )
}
