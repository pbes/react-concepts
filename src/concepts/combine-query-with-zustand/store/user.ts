import { create } from "zustand";
import { User } from "../api/user";

type UserStoreProps = {
    users: User[]
    setUsers: (users: User[]) => void
}

export const useUserStore = create<UserStoreProps>((set) => ({
    users: [],
    setUsers: (users) => set({ users })
}));