export const FEATURE_FLAGS = {
    DO_SOMETHING: "DO_SOMETHING",
} as const;

export type FeatureFlags = typeof FEATURE_FLAGS[keyof typeof FEATURE_FLAGS];