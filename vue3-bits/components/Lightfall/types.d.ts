/**
 * Public prop contract for <Lightfall>.
 *
 * Mirrors the react-bits `Lightfall` background component. Every prop is
 * optional and defaults to the react-bits values (the defaults are applied in
 * the SFC via `withDefaults`). The shader is a raw WebGL2 port of the react-bits
 * GLSL, so the prop API stays byte-for-byte equivalent.
 */
/** Public props for <Lightfall>. All optional. */
export interface LightfallProps {
    /** Streak palette colors as hex strings. Defaults to the react-bits gradient. */
    colors?: string[];
    /**
     * Individual streak colors. When all three (`color1` + `color2` + `color3`)
     * are provided they take precedence over `colors` — mirroring the react-bits
     * API exactly.
     */
    color1?: string;
    /** See `color1`. */
    color2?: string;
    /** See `color1`. */
    color3?: string;
    /** Background color as a hex string. */
    backgroundColor?: string;
    /** Animation speed multiplier. */
    speed?: number;
    /** Number of light streaks (clamped to 1..16 at runtime). */
    streakCount?: number;
    /** Streak width. */
    streakWidth?: number;
    /** Streak length. */
    streakLength?: number;
    /** Glow intensity. */
    glow?: number;
    /** Streak density, 0..1. */
    density?: number;
    /** Twinkle amount. */
    twinkle?: number;
    /** Zoom level. */
    zoom?: number;
    /** Background glow amount. */
    backgroundGlow?: number;
    /** Overall opacity, 0..1. */
    opacity?: number;
    /** Enable mouse interaction. */
    mouseInteraction?: boolean;
    /** Mouse interaction strength. */
    mouseStrength?: number;
    /** Mouse interaction radius. */
    mouseRadius?: number;
    /** Mouse position dampening factor; `0` disables damping. */
    mouseDampening?: number;
    /** Device pixel ratio override. `undefined` → `window.devicePixelRatio`. */
    dpr?: number;
    /** Pause the animation loop. */
    paused?: boolean;
    /** Extra CSS class applied to the container element. */
    className?: string;
    /** CSS `mix-blend-mode` value applied to the container element. */
    mixBlendMode?: string;
}
