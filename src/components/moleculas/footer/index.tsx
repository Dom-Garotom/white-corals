import styled from "styled-components"
import logo from "@/public/logo-footer.png"
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitch } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";


const WrapperLinks = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`
const WrapperInformacoes = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    gap: 10px;

    a{
        min-width: 250px;
        text-decoration: none;
        color: #FFF;
        
        &:hover{
            color: #3493ff;
            font-weight: 600;
        }
    }
`
const Wrapper = styled.div`
    display: flex;
    text-align: left;
    gap: 20px;

    svg{
        width: 30px;
        height: 30px;
        color: #fff;
        
        &:hover{
            color: #3B6AE1;
        }
    }
`

const WrapperFooter = styled.footer`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin:  40px 0px 0px 0px;
    padding: 20px;
    background-color: #000;

    img{
        width: 150px;
        height: 100px;
    }

    h3{
        font-size: 1.4rem;
        color: #fff;
    }

    @media screen and (max-width : 700px ) {
        flex-direction: column;
        gap: 50px;

        ${WrapperInformacoes}{
            h3,a{
                text-align: center;
            }
        }
    }
`




export default function Footer() {

  const socialLinks = [
    {
      name: "Instagram",
      icon: <FaInstagram />,
      link: "https://www.instagram.com",
    },
    {
      name: "YouTube",
      icon: <FaYoutube />,
      link: "https://www.youtube.com",
    },
    {
      name: "Twitch",
      icon: <FaTwitch />,
      link: "https://www.twitch.tv",
    },
    {
      name: "Facebook",
      icon: <FaFacebookF />,
      link: "https://www.facebook.com",
    },
    {
      name: "Discord",
      icon: <FaDiscord />,
      link: "https://www.discord.com",
    },
  ];

  const infoLinks = [
    {
      name: "Política de Privacidade",
      link: "https://www.exemplo.com/politica-de-privacidade",
    },
    {
      name: "Política de Espaço Mais Seguro",
      link: "https://www.exemplo.com/politica-de-espaco-seguro",
    },
    {
      name: "Termos de Uso",
      link: "https://www.exemplo.com/termos-de-uso",
    },
    {
      name: "Regulamento BIG Festival",
      link: "https://www.exemplo.com/regulamento-big-festival",
    },
  ];
  

  return (
    <WrapperFooter>
        <WrapperLinks>
            <h3>Redes Socias</h3>
            <Wrapper>
                {socialLinks.map((social, index) => (
                    <Link key={index} href={social.link} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                        {social.icon}
                    </Link>
                ))}
            </Wrapper>
        </WrapperLinks>

        <WrapperInformacoes>
            <h3>Informações</h3>
            {infoLinks.map((info, index) => (
                <Link key={index} href={info.link} target="_blank" rel="noopener noreferrer">
                    {info.name}
                </Link>
            ))}
        </WrapperInformacoes>


        <Image src={logo} alt="Logo do evento" />
    </WrapperFooter>
  )
}