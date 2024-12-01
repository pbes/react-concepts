import FeatureEnabled from "./components/FeatureEnabled";

export default function FeatureFlags() {
    return (
        <>
            <h3>Feature flags</h3>
            <p>Feature flags can be used to enable or disable features for different users.</p>
            <code className="language-html">
                {`<>
    <p>Feature flags can be used to enable or disable features for different users.</p>
    <FeatureEnabledForAll />
    <FeatureEnabled feature="DO_SOMETHING">
        <RestrictedFeature />
    </FeatureEnabled>
</>`}
            </code>
            <h3>FeatureEnabled:</h3>
            <code className="language-html">{`type FeatureEnabledProps = PropsWithChildren & {
    feature: FeatureFlags;
}
export default function FeatureEnabled({ children, feature }: FeatureEnabledProps) {
    return canAccessFeature(feature) ? children : null;
}`}</code>
            <FeatureEnabledForAll />
            <FeatureEnabled feature="DO_SOMETHING">
                <RestrictedFeature />
            </FeatureEnabled>
        </>
    )
}

function FeatureEnabledForAll() {
    return (
        <p>This is a feature that is enabled for everyone.</p>
    );
}

function RestrictedFeature() {
    return (
        <p>This is a feature that is restricted to certain users.</p>
    );
}