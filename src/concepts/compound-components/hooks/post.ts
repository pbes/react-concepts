import { createContext, useContext } from "react";

export type Post = {
    id: number;
    title: string;
    body: string;
    author: string;
}

export type PostCardContext = {
    post: Post;
}

export const PostCardContext = createContext<PostCardContext | undefined>(undefined);

export const usePostContext = () => {
    const context = useContext(PostCardContext);
    if (!context) {
        throw new Error('usePostContext must be used within a PostCardContext.Provider');
    }
    return context;
}