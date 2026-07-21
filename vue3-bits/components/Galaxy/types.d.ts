/**
 * Public prop contract for <Galaxy>.
 *
 * A faithful Vue3 / TypeScript port of the react-bits `Galaxy` background
 * (react-bits.md §24). Every prop is optional and defaults to the react-bits
 * values (applied in the SFC via `withDefaults`). The shader (`vertexShader` +
 * `fragmentShader` GLSL) is a verbatim port of the ogl implementation, so the
 * prop API stays byte-for-byte equivalent.
 *
 * Note: react-bits passes `uResolution` as an ogl `Color`; we use a plain
 * `[width, height, aspect]` vec3 array instead — functionally identical for the
 * shader (which only reads `.xy` / `.y`) and keeps the engine free of the
 * `Color` surface that is not part of the bundled `ogl` typings.
 */
/** Public props for <Galaxy>. All optional. */
export interface GalaxyProps {
    /** Focal point of the projection, in `[x, y]` normalized coords. */
    focal?: [number, number];
    /** Rotation applied to the UVs, in `[x, y]`. */
    rotation?: [number, number];
    /** Star flow speed. */
    starSpeed?: number;
    /** Star field density. */
    density?: number;
    /** Hue shift in degrees. */
    hueShift?: number;
    /** Freeze the animation. */
    disableAnimation?: boolean;
    /** Overall animation speed. */
    speed?: number;
    /** Enable mouse interaction (move / leave listeners). */
    mouseInteraction?: boolean;
    /** Glow intensity of the stars. */
    glowIntensity?: number;
    /** Color saturation. */
    saturation?: number;
    /** Whether stars are repelled by the mouse. */
    mouseRepulsion?: boolean;
    /** Twinkle intensity. */
    twinkleIntensity?: number;
    /** Idle auto-rotation speed. */
    rotationSpeed?: number;
    /** Strength of the mouse repulsion. */
    repulsionStrength?: number;
    /** Constant repulsion from the center (0 = off). */
    autoCenterRepulsion?: number;
    /** Transparent background (alpha) vs. opaque black. */
    transparent?: boolean;
    /** Extra CSS class applied to the container element. */
    className?: string;
}
/** Single source of truth for every <Galaxy> default. */
export declare const DEFAULT_GALAXY_PROPS: {
    readonly focal: [number, number];
    readonly rotation: [number, number];
    readonly starSpeed: 0.5;
    readonly density: 1;
    readonly hueShift: 140;
    readonly disableAnimation: false;
    readonly speed: 1;
    readonly mouseInteraction: true;
    readonly glowIntensity: 0.3;
    readonly saturation: 0;
    readonly mouseRepulsion: true;
    readonly twinkleIntensity: 0.3;
    readonly rotationSpeed: 0.1;
    readonly repulsionStrength: 2;
    readonly autoCenterRepulsion: 0;
    readonly transparent: true;
    readonly className: "";
};
