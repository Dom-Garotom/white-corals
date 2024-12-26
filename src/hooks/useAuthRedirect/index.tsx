import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const useAuthRedirect = () => {
    const router = useRouter()
    const hasUserCookie = document.cookie.includes("authToken");

    useEffect(() => {
        if (hasUserCookie) {
            router.push("/home")
        }
    })

}