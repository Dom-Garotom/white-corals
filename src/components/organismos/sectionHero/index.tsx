import { ButtonDefault, TitleMain } from "@/styles/styledComponents"
import { WrapperHero } from "./style"
import Link from "next/link"

export default function Hero() {
    return (
        <WrapperHero>
            <TitleMain>Comunidade de artigos</TitleMain>
            <p>
                Descubra os <b>impactos devastadores do branqueamento de corais</b> e saiba como você pode fazer a diferença.
                Compartilhe seu conhecimento em um ambiente colaborativo e focado em ajudar os corais.
                <b>Poste artigos, perguntas e interaja com uma comunidade</b> que está em busca dos mesmos ideais que você.
            </p>
            <ButtonDefault $secondary>
                <Link href={"/newPost"}>
                    Criar postagem
                </Link>
            </ButtonDefault>
        </WrapperHero>
    )
}
