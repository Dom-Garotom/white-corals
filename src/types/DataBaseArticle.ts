export type DataBaseArticle = {
  id: string;
  title: string;
  article: string;
  tags: {
    content: string;
    color: string;
  }[];
  likes: number;
  comentarios: number;
  saved: boolean;
  image?: string;
}
