/**
 * Public prop contract for <Orb>.
 *
 * A faithful Vue3 / TypeScript port of the react-bits `Orb` background
 * (react-bits.md §30). Every prop is optional and defaults to the react-bits
 * values (applied in the SFC via `withDefaults`). The shader (`vert` +
 * `frag` GLSL) is a verbatim port of the ogl implementation.
 *
 * `vec3` uniforms (`iResolution`, `backgroundColor`) are supplied as plain
 * number arrays — ogl accepts arrays for vec3 uniforms, and the bundled `ogl`
 * typings declare `Vec3` only as an interface (no constructor), so arrays keep
 * the engine type-clean while staying byte-for-byte equivalent at runtime.
 */
/** Public props for <Orb>. All optional. */
export interface OrbProps {
    /** Hue rotation applied to the base colors (degrees). */
    hue?: number;
    /** Strength of the wobble applied when hovered. */
    hoverIntensity?: number;
    /** Rotate the orb while hovered. */
    rotateOnHover?: boolean;
    /** Force the hover state on regardless of the pointer. */
    forceHoverState?: boolean;
    /** Background color behind the orb (hex / rgb / hsl). */
    backgroundColor?: string;
    /** Extra CSS class applied to the container element. */
    className?: string;
}
/** Single source of truth for every <Orb> default. */
export declare const DEFAULT_ORB_PROPS: {
    readonly hue: 0;
    readonly hoverIntensity: 0.2;
    readonly rotateOnHover: true;
    readonly forceHoverState: false;
    readonly backgroundColor: "#000000";
    readonly className: "";
};
