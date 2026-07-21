/**
 * Public prop contract for <Radar>.
 *
 * A faithful Vue3 / TypeScript port of the react-bits `Radar` background.
 * Every prop is optional and defaults to the react-bits values (applied in the
 * SFC via `withDefaults`). The shader is a raw ogl port of the react-bits GLSL,
 * so the prop API stays byte-for-byte equivalent.
 */
/** Public props for <Radar>. All optional. */
export interface RadarProps {
    /** Animation speed multiplier. */
    speed?: number;
    /** Scale of the radar field (smaller = zoomed in). */
    scale?: number;
    /** Number of concentric rings. */
    ringCount?: number;
    /** Number of radial spokes. */
    spokeCount?: number;
    /** Thickness of each ring. */
    ringThickness?: number;
    /** Thickness of each spoke. */
    spokeThickness?: number;
    /** Angular speed of the sweeping beam. */
    sweepSpeed?: number;
    /** Width of the sweep beam lobe. */
    sweepWidth?: number;
    /** Number of sweep lobes. */
    sweepLobes?: number;
    /** Primary color of the radar (hex). */
    color?: string;
    /** Background color (hex). */
    backgroundColor?: string;
    /** Edge falloff exponent. */
    falloff?: number;
    /** Overall brightness. */
    brightness?: number;
    /** Whether the field shifts toward the pointer. */
    enableMouseInteraction?: boolean;
    /** Strength of the pointer shift. */
    mouseInfluence?: number;
}
/** Single source of truth for every <Radar> default. */
export declare const DEFAULT_RADAR_PROPS: {
    readonly speed: 1;
    readonly scale: 0.5;
    readonly ringCount: 10;
    readonly spokeCount: 10;
    readonly ringThickness: 0.05;
    readonly spokeThickness: 0.01;
    readonly sweepSpeed: 1;
    readonly sweepWidth: 2;
    readonly sweepLobes: 1;
    readonly color: "#9f29ff";
    readonly backgroundColor: "#000000";
    readonly falloff: 2;
    readonly brightness: 1;
    readonly enableMouseInteraction: true;
    readonly mouseInfluence: 0.1;
};
