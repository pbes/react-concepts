import { useParams } from "react-router-dom";

export function PathParam() {

    const { id } = useParams<{ id: string }>();

    return (
        <div>
            <h1>Path param: {id}</h1>
        </div>
    );
}