import { usePostContext } from "../hooks/post";

export function AlternatePostCardBody() {

    const { post } = usePostContext();

    return (
        <pre>{ JSON.stringify(post, null, 2) }</pre>
    )
}