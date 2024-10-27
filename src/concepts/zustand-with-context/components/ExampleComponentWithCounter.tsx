import CounterStoreProvider, { useCounterStore } from "./CounterStoreProvider";

type ExampleComponentProps = {
    initialCount: number;
}

export default function ExampleComponentWithCounter({ initialCount }: ExampleComponentProps) {
    return (
        <CounterStoreProvider initialCount={initialCount}>
            <Component />
        </CounterStoreProvider>
    )
}

function Component() {
    const count = useCounterStore((state) => state.count);

    return (
        <span>{count}</span>
    )
}