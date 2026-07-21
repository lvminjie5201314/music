/**
 * Public prop contract for <Hyperspeed>.
 *
 * 1:1 Vue3 / TypeScript port of the react-bits `Hyperspeed` background. The
 * engine (`hyperspeedEngine.ts`) is a faithful three.js port of the original
 * `App` / `Road` / `CarLights` / `LightsSticks` scene. The react-bits source
 * depended on the `postprocessing` package (BloomEffect / EffectPass / SMAA)
 * which vue3-bits does not ship, so the post chain is rebuilt with
 * `three/examples/jsm` (EffectComposer + RenderPass + UnrealBloomPass) — still
 * bundled with peer `three`, 0 new deps. SMAA is intentionally dropped (it
 * needs embedded image assets from `postprocessing`).
 */
/** A single distortion preset's GLSL + JS camera companion. */
export interface Distortion {
    uniforms: Record<string, {
        value: unknown;
    }>;
    getDistortion: string;
    getJS?: (progress: number, time: number) => import('three').Vector3;
}
export interface Distortions {
    [key: string]: Distortion;
}
/** Per-option color palette. Values are hex ints (0xRRGGBB). */
export interface HyperspeedColors {
    roadColor: number;
    islandColor: number;
    background: number;
    shoulderLines: number;
    brokenLines: number;
    leftCars: number[];
    rightCars: number[];
    sticks: number;
}
/** Full configuration object consumed by the engine. */
export interface HyperspeedOptions {
    onSpeedUp?: (ev: MouseEvent | TouchEvent) => void;
    onSlowDown?: (ev: MouseEvent | TouchEvent) => void;
    distortion?: string | Distortion;
    length: number;
    roadWidth: number;
    islandWidth: number;
    lanesPerRoad: number;
    fov: number;
    fovSpeedUp: number;
    speedUp: number;
    carLightsFade: number;
    totalSideLightSticks: number;
    lightPairsPerRoadWay: number;
    shoulderLinesWidthPercentage: number;
    brokenLinesWidthPercentage: number;
    brokenLinesLengthPercentage: number;
    lightStickWidth: [number, number];
    lightStickHeight: [number, number];
    movingAwaySpeed: [number, number];
    movingCloserSpeed: [number, number];
    carLightsLength: [number, number];
    carLightsRadius: [number, number];
    carWidthPercentage: [number, number];
    carShiftX: [number, number];
    carFloorSeparation: [number, number];
    colors: HyperspeedColors;
    isHyper?: boolean;
}
/** Public props for <Hyperspeed>. All optional. */
export interface HyperspeedProps {
    /** Partial override of the engine options (merged onto defaults). */
    effectOptions?: Partial<HyperspeedOptions>;
    /** Extra CSS class applied to the container element. */
    className?: string;
}
/** Single source of truth for every <Hyperspeed> default. */
export declare const DEFAULT_HYPERSPEED_PROPS: {
    readonly effectOptions: Partial<HyperspeedOptions>;
    readonly className: "";
};
/** The react-bits default options (used as the engine baseline). */
export declare const defaultOptions: HyperspeedOptions;
/** The six react-bits presets (handy demo shortcuts). */
export declare const hyperspeedPresets: Record<string, Partial<HyperspeedOptions>>;
