/**
 * Public prop contract for <Plasma>.
 *
 * A faithful Vue3 / TypeScript port of the react-bits `Plasma` background.
 * Every prop is optional and defaults to the react-bits values (applied in the
 * SFC via `withDefaults`). The shader is a raw ogl port of the react-bits GLSL
 * (WebGL2 `#version 300 es`), so the prop API stays byte-for-byte equivalent.
 */
/** Animation direction of the plasma flow. */
export type PlasmaDirection = 'forward' | 'reverse' | 'pingpong';
/** Public props for <Plasma>. All optional. */
export interface PlasmaProps {
    /** Tint color applied to the plasma (hex). */
    color?: string;
    /** Animation speed multiplier. */
    speed?: number;
    /** Flow direction: forward / reverse / pingpong. */
    direction?: PlasmaDirection;
    /** Zoom / scale of the plasma field. */
    scale?: number;
    /** Output opacity. */
    opacity?: number;
    /** Whether the field reacts to the pointer. */
    mouseInteractive?: boolean;
}
/** Single source of truth for every <Plasma> default. */
export declare const DEFAULT_PLASMA_PROPS: {
    readonly color: "#ffffff";
    readonly speed: 1;
    readonly direction: "forward";
    readonly scale: 1;
    readonly opacity: 1;
    readonly mouseInteractive: true;
};
