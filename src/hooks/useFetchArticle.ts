import { ArtiSphereApi } from "@/services/api/artisphere"
import { useMutation, UseMutationOptions, useQuery, UseQueryOptions, UseQueryResult } from "@tanstack/react-query"

type RequestMethod = "patch" | "put" | "delete" | "post";
const fiveMinutsInMilisseconds = 1000 * 60 * 5;

export const useFetchArticle = <T>(path: string, category?: string, options?: UseQueryOptions<T>): UseQueryResult<T> => {
    return useQuery<T>({
        ...options,
        queryKey: ['article', category || "all"],
        queryFn: async (): Promise<T> => {
            try {
                const articleResponse = await ArtiSphereApi.get(path);
                const articleData: T = Array.isArray(articleResponse.data) ? articleResponse.data : JSON.parse(articleResponse.data);
                console.log(articleData);


                if (!articleData) {
                    throw new Error("Erro na requisição");
                }

                return articleData;
            } catch (error) {
                console.log(`Erro ao realizar ao buscar na rota ${path}` + error)
                throw new Error(`Error na requisição: ${(error as Error)?.message}`)
            }
        },
        staleTime: fiveMinutsInMilisseconds, // tempo de dados frescos 
        retry: 3,
        refetchOnWindowFocus: false,
    })
}


export const useMutationFetchArticle = (path: string, requestBody: object, method: RequestMethod, options?: UseMutationOptions) => {
    return useMutation({
        mutationFn: async () => {
            try {
                const articleResponse = await ArtiSphereApi[method](path, requestBody);

                if (!articleResponse.data) {
                    throw new Error("Erro na requisição");
                }

                return articleResponse.data;
            } catch (error) {
                console.log(`Erro ao realizar o ${method} na rota ${path}` + error);
                throw new Error(`Error na requisição: ${(error as Error)?.message}`)
            }
        },
        ...options
    })
}