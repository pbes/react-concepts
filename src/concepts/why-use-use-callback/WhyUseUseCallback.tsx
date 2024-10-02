import { memo, useCallback, useState } from "react";

export default function WhyUseUseCallback() {
    return (
        <>
            <BadTestComponent />
            <GoodTestComponent />
        </>
    )
}

const BadTestComponent = () => {
    const [count, setCount] = useState(0);

    const func = () => {
        console.log('test function')
    }

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Increase count</button>
            <ChildComponent func={func} name="BadTestComponent" />
        </div>
    )
}

const GoodTestComponent = () => {
    const [count, setCount] = useState(0);

    const func = useCallback(() => {
        console.log('test function');
    }, [])

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Increase count</button>
            <ChildComponent func={func} name="GoodTestComponent" />
        </div>
    )
}

type ChildComponentProps = {
    func: () => void;
    name: string;
}

const ChildComponent = memo(({ func, name }: ChildComponentProps) => {
    console.log(`${name} children rendered`)
    return (
        <div>
            <button onClick={func}>Click me</button>
        </div>
    )
})