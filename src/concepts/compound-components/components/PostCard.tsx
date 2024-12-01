import { PropsWithChildren } from "react";
import { Post, PostCardContext, usePostContext } from "../hooks/post";

type PostCardProps = {
    post: Post;
} & PropsWithChildren;

export function PostCard({ post, children }: PostCardProps) {

    return (
        <PostCardContext.Provider value={{ post }}>
            {!!children && children}
            {!children && (
                <>
                    <PostCard.Title />
                    <PostCard.Body />
                    <PostCard.Footer />
                </>
            )}
        </PostCardContext.Provider>
    )
}

PostCard.Title = function PostCardTitle() {
    const { post } = usePostContext();
    return <h3>{post.title}</h3>;
}

PostCard.Body = function PostCardBody() {
    const { post } = usePostContext();
    return <p>{post.body}</p>;
}

PostCard.Footer = function PostCardFooter() {
    const { post } = usePostContext();
    return (
        <footer>
            <p>Posted by: <strong>{post.author}</strong></p>
            <p>This is the default</p>
        </footer>
    )
}