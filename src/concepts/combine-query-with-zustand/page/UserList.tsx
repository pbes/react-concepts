import { useUserStore } from "../store/user";
import { UserListContent } from "../components/UserListContent";
import { useUsers } from "../hooks/useUsers";

export function UserList() {

    const { users } = useUserStore();
    const { isPending } = useUsers();

    return (
        <div>
            {isPending ? (
                <div>Loading...</div>
            ) : (
                <UserListContent users={users} />
            )}
            <small>
                As you can see: useQuery is a server state management library on its own
            </small>
        </div>
    );

}