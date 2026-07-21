import { CSSProperties } from 'vue';
/**
 * Public prop contract for <MagicRings>.
 *
 * A faithful Vue 3 port of the react-bits `MagicRings` (#62): a full-screen
 * quad rendered with a `THREE.ShaderMaterial`. Concentric rings pulse outward
 * from the center, tinted from `color` → `colorTwo`, with pointer smoothing,
 * hover scaling, parallax and an optional click "burst". Every prop maps 1:1
 * onto a GLSL uniform (see `MagicRings.vue`), and live prop changes are pushed
 * into the uniforms each frame with no rebuild.
 *
 * three.js is a peer dependency already used by the repo's other 3D ports, so
 * this adds no new runtime dependency.
 */
export interface MagicRingsProps {
    /** Primary ring color (any CSS color string). */
    color?: string;
    /** Secondary ring color — rings are tinted `color`→`colorTwo` by index. */
    colorTwo?: string;
    /** Time multiplier for the animation (higher = faster rings). */
    speed?: number;
    /** Number of concentric rings (clamped to ≤ 10 by the shader loop). */
    ringCount?: number;
    /** Edge falloff — higher values make rings dimmer further from the line. */
    attenuation?: number;
    /** Ring stroke thickness (in shader pixel units). */
    lineThickness?: number;
    /** Radius of the innermost ring. */
    baseRadius?: number;
    /** Radius increment added per ring. */
    radiusStep?: number;
    /** How far each ring grows over its life cycle. */
    scaleRate?: number;
    /** Overall output opacity (0 = transparent, 1 = opaque). */
    opacity?: number;
    /** CSS `blur()` applied to the container (0 = no blur). */
    blur?: number;
    /** Per-pixel random noise added on top of the color. */
    noiseAmount?: number;
    /** Rotation of the whole field, in degrees. */
    rotation?: number;
    /** Multiplicative gap between rings — `pow(ringGap, index)`. */
    ringGap?: number;
    /** Fraction of the cycle over which rings fade in. */
    fadeIn?: number;
    /** Fraction of the cycle over which rings fade out. */
    fadeOut?: number;
    /** When true, the field shifts toward the pointer (scaled by `mouseInfluence`). */
    followMouse?: boolean;
    /** How strongly `followMouse` pulls the field toward the pointer. */
    mouseInfluence?: number;
    /** Scale applied to the field while hovered (1 = no change). */
    hoverScale?: number;
    /** Per-ring parallax offset along the pointer direction. */
    parallax?: number;
    /** When true, a click fires a decaying "burst" pulse. */
    clickBurst?: boolean;
    /** Extra CSS class appended to the root element. */
    className?: string;
    /** Inline style applied to the root element. */
    style?: CSSProperties;
}
