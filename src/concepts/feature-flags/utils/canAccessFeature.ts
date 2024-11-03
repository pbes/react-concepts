import { FeatureFlags } from "../types/features";

export function canAccessFeature(feature: FeatureFlags): boolean {
    console.log("Checking if user can access feature", feature);
    return false;
}