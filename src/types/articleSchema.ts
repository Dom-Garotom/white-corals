import { z } from "zod";

export const ArticleSchema = z.object({
    id: z.string(),
    title: z.string().min(4, "O título é obrigatório"),
    article: z.string().min(20, "O artigo é obrigatório"),
    tags: z.array(z.object({
      content: z.string(),
      color: z.string()
    })),
    likes: z.number(),
    comentarios: z.number(),
    saved: z.boolean(),
    image: z.string().url("A URL da imagem deve ser válida"),
  });
  
export type ArticleSchema = z.infer<typeof ArticleSchema>;

export type  ArticleTags =  {
    content: string;
    color: string;
}[]
