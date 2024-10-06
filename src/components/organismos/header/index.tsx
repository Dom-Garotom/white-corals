import Image from "next/image"
import Link from "next/link"
import { IoIosArrowDown } from "react-icons/io";
import LogoHeader from "@/public/logo-header.png"
import { AiOutlineMenu } from "react-icons/ai";
import { ButtonMenuHeader } from "@/styles/styledComponents";
import { useEffect, useRef, useState } from "react";
import { WrapperHeader ,Wrapper , WrapperContainer , WrapperMenu } from "./headerStyled";

type UserData = {
    email: string;
    senha: string;
    nome: string;
}

export default function Header() {
    const header = useRef<HTMLDivElement>(null);
    const [widthScreen, setWidthScreen] = useState(0);
    const [isVisble, setIsVisible] = useState(false);
    const [menuIsVisible, setMenuIsVisble] = useState(false)

    const togglVisibilityMenu = () =>{
        setMenuIsVisble(!menuIsVisible)
    }

    useEffect(() => {
        const handleWidthScreen = () => {
            if (header.current) {
                setWidthScreen(header.current.offsetWidth);
            }
        }

        handleWidthScreen();

        window.addEventListener("resize", handleWidthScreen)

        if (widthScreen < 800) {
            setIsVisible(true);
        } else {
            setIsVisible(false)
        }

        return () => {
            window.removeEventListener("resize", handleWidthScreen);
        }
    })

    const getUser = localStorage.getItem("user");
    const users : UserData[] = getUser ? JSON.parse(getUser) : [];


    return (
        <WrapperHeader ref={header}>
            <WrapperContainer>
                <Link href={''}>
                    <Image src={LogoHeader} alt="Logo da white corals" />
                </Link>

                <Wrapper>
                    {!isVisble &&
                        <div>
                            <Link href={'/home'}>Home</Link>
                            <Link href={'/myArticles'}>Meus Artigos</Link>
                            <Link href={'/newPost'}>Publicar artigo</Link>
                        </div>
                    }

                    <span>
                        olá,
                        <Link href={''} id="NameUser">
                            <b>{users[0].nome}</b>
                            <IoIosArrowDown />
                        </Link>
                    </span>

                    <ButtonMenuHeader $block={isVisble} onClick={() => togglVisibilityMenu()}>
                        <AiOutlineMenu />
                    </ButtonMenuHeader>

                </Wrapper>
            </WrapperContainer>
            <WrapperMenu block={menuIsVisible}>
                <Link href={'/home'}>Home</Link>
                <Link href={'/myArticles'}>Meus Artigos</Link>
                <Link href={'/newPost'}>Publicar artigo</Link>
            </WrapperMenu>

        </WrapperHeader>
    )
}
