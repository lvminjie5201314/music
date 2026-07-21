/**
 * Public prop contract for <LightRays>.
 *
 * A faithful Vue3 / TypeScript port of the react-bits `LightRays` background.
 * Every prop is optional and defaults to the react-bits values (the defaults are
 * applied in the SFC via `withDefaults`). The shader is a raw ogl port of the
 * react-bits GLSL, so the prop API stays byte-for-byte equivalent.
 *
 * Note: react-bits ships `RaysOrigin` with the four edge + centre values
 * (`'left'` / `'right'` for the side edges). To keep the union unambiguous and
 * symmetric we expose explicit `'left-center'` / `'right-center'` entries
 * instead of the bare `'left'` / `'right'`. `getAnchorAndDir` wires both.
 */
/** Where the rays originate from, relative to the container. */
export type RaysOrigin = 'top-center' | 'top-left' | 'top-right' | 'bottom-center' | 'bottom-left' | 'bottom-right' | 'left-center' | 'right-center';
/** Public props for <LightRays>. All optional. */
export interface LightRaysProps {
    /** Where the rays originate from (see {@link RaysOrigin}). */
    raysOrigin?: RaysOrigin;
    /** Ray color as a `#rgb` / `#rrggbb` hex string. */
    raysColor?: string;
    /** Animation speed multiplier. */
    raysSpeed?: number;
    /** Angular spread of the rays (higher = tighter cone). */
    lightSpread?: number;
    /** Ray length multiplier. */
    rayLength?: number;
    /** Whether the brightness pulses over time. */
    pulsating?: boolean;
    /** Distance (in fraction of width) before the rays fade out. */
    fadeDistance?: number;
    /** Color saturation; `1` leaves colors unchanged. */
    saturation?: number;
    /** Whether the rays bend toward the mouse. */
    followMouse?: boolean;
    /** How strongly the mouse bends the rays (0..1). */
    mouseInfluence?: number;
    /** Amount of noise applied to the rays. */
    noiseAmount?: number;
    /** Distortion wobble applied to the ray angle. */
    distortion?: number;
    /** Extra CSS class applied to the container element. */
    className?: string;
}
/** Single source of truth for every <LightRays> default. */
export declare const DEFAULT_LIGHT_RAYS_PROPS: {
    readonly raysOrigin: "top-center";
    readonly raysColor: "#ffffff";
    readonly raysSpeed: 1;
    readonly lightSpread: 1;
    readonly rayLength: 2;
    readonly pulsating: false;
    readonly fadeDistance: 1;
    readonly saturation: 1;
    readonly followMouse: true;
    readonly mouseInfluence: 0.1;
    readonly noiseAmount: 0;
    readonly distortion: 0;
    readonly className: "";
};
