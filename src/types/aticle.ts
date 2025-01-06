import { Comments } from "./comments"
import { Tags } from "./tags"

export type Article = {
    id: string,
    person_id: string,
    title: string,
    article: string ,
    num_likes: 0,
    num_comments: 0,
    imageUrl: string ,
    tags : Tags [],
    comments: Comments[]
}