import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "../../../api/base";
import { User } from "../api/user";
import { useUserStore } from "../store/user";
import { useEffect } from "react";

export const useUsers = () => {
    const { setUsers } = useUserStore();

    const { data, ...rest } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const response = await fetch(`${BASE_URL}/users`);
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return (await response.json()) as User[];
        },
    });

    useEffect(() => {
        if (data) {
            setUsers(data);
        }
    }, [data]);

    return {
        ...rest,
        data
    };
}