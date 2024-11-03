import { PropsWithChildren } from "react";
import { FeatureFlags } from "../types/features";
import { canAccessFeature } from "../utils/canAccessFeature";

type FeatureEnabledProps = PropsWithChildren & {
    feature: FeatureFlags;
}
export default function FeatureEnabled({ children, feature }: FeatureEnabledProps) {
    return canAccessFeature(feature) ? children : null;
}