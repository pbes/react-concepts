import ExampleComponentWithCounter from "./components/ExampleComponentWithCounter";

export default function ZustandWithContext() {
    return (
        <>
            <p>When you create your Zustand store standalone, it'll become a global store.</p>
            <p>If you create it in Context API, you can pass initial values from props instead of using default values.</p>
            <ExampleComponentWithCounter initialCount={10} />
        </>
    )
}