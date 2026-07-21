/**
 * Public prop contract for <LineWaves>.
 *
 * A faithful Vue3 / TypeScript port of the react-bits `LineWaves` background.
 * Every prop is optional and defaults to the react-bits values (applied in the
 * SFC via `withDefaults`). The shader is a raw ogl port of the react-bits GLSL,
 * so the prop API stays byte-for-byte equivalent.
 */
/** Public props for <LineWaves>. All optional. */
export interface LineWavesProps {
    /** Animation speed multiplier. */
    speed?: number;
    /** Number of lines drawn near the inner (vertical-centre) region. */
    innerLineCount?: number;
    /** Number of lines drawn near the outer regions. */
    outerLineCount?: number;
    /** How strongly the field is warped by the noise displacement. */
    warpIntensity?: number;
    /** Field rotation in degrees. */
    rotation?: number;
    /** Width of the soft top/bottom edge fade (0 = no fade). */
    edgeFadeWidth?: number;
    /** Speed at which the gradient cycles through colors. */
    colorCycleSpeed?: number;
    /** Overall brightness of the rendered lines. */
    brightness?: number;
    /** First gradient / line color (hex). */
    color1?: string;
    /** Second gradient / line color (hex). */
    color2?: string;
    /** Third gradient / line color (hex). */
    color3?: string;
    /** Whether the field bends toward the pointer. */
    enableMouseInteraction?: boolean;
    /** Strength of the pointer warp. */
    mouseInfluence?: number;
}
/** Single source of truth for every <LineWaves> default. */
export declare const DEFAULT_LINE_WAVES_PROPS: {
    readonly speed: 0.3;
    readonly innerLineCount: 32;
    readonly outerLineCount: 36;
    readonly warpIntensity: 1;
    readonly rotation: -45;
    readonly edgeFadeWidth: 0;
    readonly colorCycleSpeed: 1;
    readonly brightness: 0.2;
    readonly color1: "#ffffff";
    readonly color2: "#ffffff";
    readonly color3: "#ffffff";
    readonly enableMouseInteraction: true;
    readonly mouseInfluence: 2;
};
