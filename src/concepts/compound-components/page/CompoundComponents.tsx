import { AlternatePostCardBody } from "../components/AlternatePostCardBody"
import { Post } from "../hooks/post"
import { PostCard } from "../components/PostCard"

const post: Post = {
    id: 1,
    title: 'Post Title',
    body: 'Post Body',
    author: 'Author'
}

export function CompoundComponents() {
    return (
        <>
            <h2>This is the default</h2>
            <PostCard post={post}></PostCard>
            <hr />
            <h2>This is w/ only title</h2>
            <PostCard post={post}>
                <PostCard.Title />
            </PostCard>
            <hr />
            <h2>This is the alternate version</h2>
            <PostCard post={post}>
                <AlternatePostCardBody />
            </PostCard>
        </>
    )
}