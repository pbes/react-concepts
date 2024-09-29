import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { BASE_URL } from "../../api/base";

interface Post {
    id: number;
    title: string;
}

export function ModernDataFetching() {
    const [page, setPage] = useState(1);

    const {
        data: posts,
        isError,
        isPending
    } = useQuery({
        queryKey: ["posts", page],
        queryFn: async () => {
            const response = await fetch(`${BASE_URL}/posts?page=${page}`);
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return (await response.json()) as Post[];
        }
    })

    return (
        <div>
            <h3>Modern data fetching</h3>
            <ul>
                <li>Loading & error states</li>
                <li>Query caching</li>
                <li>Automatic refetching</li>
            </ul>
            <p>Page: {page}</p>
            <button onClick={() => setPage((prev) => prev - 1)} disabled={page === 1}>
                Previous
            </button>
            <button onClick={() => setPage((prev) => prev + 1)}>Next</button>
            {isPending && <p>Loading...</p>}
            {isError && <p>Something went wrong</p>}

            <ul>
                {posts?.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
}