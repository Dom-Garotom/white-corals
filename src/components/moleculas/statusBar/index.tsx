import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
import { AiOutlineComment } from "react-icons/ai";
import StatusDefault from "@/components/atomos/statusDefault";
import { useRouter } from "next/navigation";
import { Wrapper } from "./style";


type Props = {
    likes: number;
    comentarios: number;
}


export default function StatusBar( {likes , comentarios} : Props) {
    const router = useRouter()
    return (
        <Wrapper>

            <StatusDefault
                iconDefault={<FaStar />}
                iconFull={<CiStar />}
                title="Likes"
                number={likes}
            />

            <StatusDefault
                iconDefault={<AiOutlineComment />}
                iconFull={<AiOutlineComment />}
                title="Comentarios"
                number={comentarios}
            />

            <StatusDefault
                iconDefault={<FaBookmark />}
                iconFull={<FaRegBookmark />}
                title="Salvos"
            />

            <StatusDefault
                iconDefault={<FaPlus />}
                iconFull={<FaPlus />}
                title="Criar um post"
                handleFunction={ () => router.push("/newPost")}
            />

        </Wrapper>
    )
}
