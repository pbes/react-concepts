import { User } from "../api/user";

type UserListContentProps = {
    users: User[];
}

export function UserListContent({ users }: UserListContentProps) {
    return (
        <div>
            {users?.map((user) => (
                <div key={user.id}>
                    <strong>{user.name}</strong>
                    <p>{user.email}</p>
                </div>
            ))}
        </div>
    );
}