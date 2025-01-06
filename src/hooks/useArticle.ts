import { ArtiSphereApi } from "@/services/api/artisphere"
import { Article } from "@/types/aticle";
import { useEffect, useState } from "react";

type RequestMethod = "get" | "put" | "delete" | "post";

export const useArticle = (path: string, method : RequestMethod = "get", requestBody?: object) => {
    const [articleData, setArticleData] = useState<Article[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [messageError, setMessageError] = useState<string | null>(null)

    useEffect(() => {
       fetchArticle()
    }, [path , method , requestBody])

    const fetchArticle = async () => {
        setIsLoading(true)
        try {
            const { data } = await ArtiSphereApi[method](path , requestBody)
            const articleData = Array.isArray(data) ? data : JSON.parse(data);
            
            setArticleData(articleData);

            setIsLoading(false)
        } catch (error) {
            console.log(error);
            
            setMessageError("Erro na requisição da api");
            console.log("Erro : " + error);
            setIsLoading(false)
        }
        
    }
  
    return {
        articleData,
        messageError,
        isLoading
    }
}


