/**
 * Public prop contract for <Particles>.
 *
 * A faithful Vue3 / TypeScript port of the react-bits `Particles` background
 * (react-bits.md §20). Every prop is optional and defaults to the react-bits
 * values (applied in the SFC via `withDefaults`). The shader (`vertex` +
 * `fragment` GLSL) and the per-particle geometry build are verbatim ports of the
 * ogl implementation, so the prop API stays byte-for-byte equivalent.
 */
/** Public props for <Particles>. All optional. */
export interface ParticlesProps {
    /** Number of particles. */
    particleCount?: number;
    /** Spread multiplier of the unit-sphere positions. */
    particleSpread?: number;
    /** Animation speed. */
    speed?: number;
    /** Palette of particle colors (hex strings). Falls back to white. */
    particleColors?: string[];
    /** Whether particles drift toward the pointer on hover. */
    moveParticlesOnHover?: boolean;
    /** How far the whole system shifts on pointer move. */
    particleHoverFactor?: number;
    /** Use soft alpha (circular) particles instead of hard squares. */
    alphaParticles?: boolean;
    /** Base point size. */
    particleBaseSize?: number;
    /** Per-particle size jitter (0 = uniform). */
    sizeRandomness?: number;
    /** Distance of the camera along Z. */
    cameraDistance?: number;
    /** Disable the idle rotation of the whole cloud. */
    disableRotation?: boolean;
    /** Device pixel ratio used by the renderer. */
    pixelRatio?: number;
    /** Extra CSS class applied to the container element. */
    className?: string;
}
/** Single source of truth for every <Particles> default. */
export declare const DEFAULT_PARTICLES_PROPS: {
    readonly particleCount: 200;
    readonly particleSpread: 10;
    readonly speed: 0.1;
    readonly particleColors: string[] | undefined;
    readonly moveParticlesOnHover: false;
    readonly particleHoverFactor: 1;
    readonly alphaParticles: false;
    readonly particleBaseSize: 100;
    readonly sizeRandomness: 1;
    readonly cameraDistance: 20;
    readonly disableRotation: false;
    readonly pixelRatio: 1;
    readonly className: "";
};
/** Default palette used when no `particleColors` are supplied. */
export declare const DEFAULT_PARTICLES_PALETTE: string[];
