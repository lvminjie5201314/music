/**
 * Public prop contract for <SoftAurora>.
 *
 * A faithful Vue3 / TypeScript port of the react-bits `SoftAurora` background.
 * Every prop is optional and defaults to the react-bits values (applied in the
 * SFC via `withDefaults`). The shader is a raw ogl port of the react-bits GLSL,
 * so the prop API stays byte-for-byte equivalent.
 */
/** Public props for <SoftAurora>. All optional. */
export interface SoftAuroraProps {
    /** Animation speed multiplier. */
    speed?: number;
    /** Scale of the noise sampling field. */
    scale?: number;
    /** Overall brightness. */
    brightness?: number;
    /** First aurora color (hex). */
    color1?: string;
    /** Second aurora color (hex). */
    color2?: string;
    /** Frequency of the Perlin noise sampling. */
    noiseFrequency?: number;
    /** Amplitude of the Perlin noise sampling. */
    noiseAmplitude?: number;
    /** Vertical position of the aurora band (0..1). */
    bandHeight?: number;
    /** Spread / sharpness of the aurora band. */
    bandSpread?: number;
    /** Per-octave amplitude decay (fractal noise). */
    octaveDecay?: number;
    /** Phase offset of the second aurora layer. */
    layerOffset?: number;
    /** Speed at which the color gradient scrolls. */
    colorSpeed?: number;
    /** Whether the field shifts toward the pointer. */
    enableMouseInteraction?: boolean;
    /** Strength of the pointer shift. */
    mouseInfluence?: number;
}
/** Single source of truth for every <SoftAurora> default. */
export declare const DEFAULT_SOFT_AURORA_PROPS: {
    readonly speed: 0.6;
    readonly scale: 1.5;
    readonly brightness: 1;
    readonly color1: "#f7f7f7";
    readonly color2: "#e100ff";
    readonly noiseFrequency: 2.5;
    readonly noiseAmplitude: 1;
    readonly bandHeight: 0.5;
    readonly bandSpread: 1;
    readonly octaveDecay: 0.1;
    readonly layerOffset: 0;
    readonly colorSpeed: 1;
    readonly enableMouseInteraction: true;
    readonly mouseInfluence: 0.25;
};
