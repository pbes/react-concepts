import { createContext, PropsWithChildren, useContext, useState } from "react";
import { createStore, StoreApi, useStore } from "zustand";

type CountStore = {
    count: number;
    increment: () => void;
}

const CounterStoreContext = createContext<StoreApi<CountStore> | undefined>(undefined);

type CountProviderProps = PropsWithChildren & {
    initialCount?: number;
}

export default function CounterStoreProvider({ initialCount, children }: CountProviderProps) {
    const [store] = useState(() => createStore<CountStore>((set) => ({
        count: initialCount ?? 0,
        increment: () => set((state) => ({ count: state.count + 1 }))
    })));

    return (
        <CounterStoreContext.Provider value={store}>
            {children}
        </CounterStoreContext.Provider>
    )
}

export function useCounterStore<T>(selector: (state: CountStore) => T) {
    const context = useContext(CounterStoreContext);
    if (!context) {
        throw new Error('useCounterStore must be used within a CounterStoreProvider');
    }

    return useStore(context, selector);
}