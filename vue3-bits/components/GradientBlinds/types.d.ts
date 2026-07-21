/**
 * Public prop contract for <GradientBlinds>.
 *
 * A faithful Vue3 / TypeScript port of the react-bits `GradientBlinds` background.
 * Every prop is optional and defaults to the react-bits values (applied in the
 * SFC via `withDefaults`). The shader is a raw ogl port of the react-bits GLSL
 * (WebGL1 GLSL ES 1.00, mirrored exactly), so the prop API stays byte-for-byte
 * equivalent.
 */
/** Which side the blind stripes are lit from. */
export type ShineDirection = 'left' | 'right';
/** Public props for <GradientBlinds>. All optional. */
export interface GradientBlindsProps {
    /** Extra CSS class applied to the container element. */
    className?: string;
    /** Device pixel ratio (falls back to `window.devicePixelRatio`). */
    dpr?: number;
    /** Freeze the animation (the last rendered frame stays on screen). */
    paused?: boolean;
    /** Gradient colour stops (hex strings); 1..8 entries, padded/truncated to 8. */
    gradientColors?: string[];
    /** Gradient rotation in degrees. */
    angle?: number;
    /** Amount of per-pixel noise added to the output. */
    noise?: number;
    /** Number of blinds (capped by `blindMinWidth` when that would make them wider). */
    blindCount?: number;
    /** Minimum blind width in px; caps `blindCount` so blinds stay at least this wide. */
    blindMinWidth?: number;
    /** Pointer-follow smoothing time constant (0 = instant follow). */
    mouseDampening?: number;
    /** Mirror the gradient across the vertical centre. */
    mirrorGradient?: boolean;
    /** Radius of the soft spotlight that follows the pointer (fraction of size). */
    spotlightRadius?: number;
    /** Softness exponent of the spotlight falloff. */
    spotlightSoftness?: number;
    /** Opacity of the spotlight highlight. */
    spotlightOpacity?: number;
    /** Amount of UV distortion wobble. */
    distortAmount?: number;
    /** Which side the blind stripes are lit from. */
    shineDirection?: ShineDirection;
    /** CSS `mix-blend-mode` applied to the container. */
    mixBlendMode?: string;
}
/** Single source of truth for every <GradientBlinds> default. */
export declare const DEFAULT_GRADIENT_BLINDS_PROPS: {
    readonly className: "";
    readonly dpr: number | undefined;
    readonly paused: false;
    readonly gradientColors: readonly ["#FF9FFC", "#5227FF"];
    readonly angle: 0;
    readonly noise: 0.3;
    readonly blindCount: 16;
    readonly blindMinWidth: 60;
    readonly mouseDampening: 0.15;
    readonly mirrorGradient: false;
    readonly spotlightRadius: 0.5;
    readonly spotlightSoftness: 1;
    readonly spotlightOpacity: 1;
    readonly distortAmount: 0;
    readonly shineDirection: "left";
    readonly mixBlendMode: "lighten";
};
