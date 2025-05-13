export default function ContextRerender() {
    return (
        <>
            <h3>Context API: where to use it?</h3>
            <p>Imagine a context with 2 props (valueA, valueB) and a component that consumes them.</p>
            <p>When the context value changes, all components that consume the context will re-render: if it uses only valueA, it'll even re-render if only valueB changes.</p>
            <p>Don't overuse context, as it can lead to performance issues, but Context is great for rarely changing parameters:</p>
            <ul>
                <li>Authentication</li>
                <li>Theme</li>
                <li>Language</li>
            </ul>
            <code className="language-js">
                {
`export default function App() {
    return (
        <ExampleProvider>
            <ExampleComponent />
        </ExampleProvider>
    )
}

function ExampleComponent() {
    const { valueA } = useContext(ExampleContext);

    return (
        <div>{valueA}</div>
    )
}`}
            </code>
        </>
    )
}