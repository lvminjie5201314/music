/** A single navigation entry. */
export interface GooeyNavItem {
    label: string;
    href: string;
}
/** Public props for `<GooeyNav>`. A Vue3 port of react-bits `GooeyNav`. */
export interface GooeyNavProps {
    items: GooeyNavItem[];
    /** Total bubble-animation time (ms). */
    animationTime?: number;
    /** Number of particles spawned per activation. */
    particleCount?: number;
    /** `[startDistance, endDistance]` for particle travel (px). */
    particleDistances?: [number, number];
    /** Particle spread radius (px). */
    particleR?: number;
    /** Random variance added to each particle's timing (ms). */
    timeVariance?: number;
    /** Palette indices (1..4) referencing the `--color-*` variables. */
    colors?: number[];
    /** Index of the item that is active on mount. */
    initialActiveIndex?: number;
}
/** 1:1 defaults mirroring the react-bits `GooeyNav`. */
export declare const DEFAULT_GOOEY_NAV_PROPS: {
    readonly animationTime: 600;
    readonly particleCount: 15;
    readonly particleDistances: [number, number];
    readonly particleR: 100;
    readonly timeVariance: 300;
    readonly colors: readonly [1, 2, 3, 1, 2, 3, 1, 4];
    readonly initialActiveIndex: 0;
};
