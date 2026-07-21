/**
 * Public prop contract for <Antigravity>.
 *
 * A faithful Vue 3 port of the react-bits `Antigravity` (#59) particle field.
 * Hundreds of particles are rendered with a single `THREE.InstancedMesh`; the
 * ones within `magnetRadius` of the pointer snap into a pulsing ring (with a
 * sine wave + per-particle deviation), while the rest drift as a soft scatter.
 * All motion is driven by one `requestAnimationFrame` loop over three.js — no
 * `framer-motion`, no `@react-three/fiber`, no new runtime dependency (three is
 * a peer dependency already used by the repo's other 3D ports).
 */
export interface AntigravityProps {
    /** Number of instanced particles. */
    count?: number;
    /** Pointer attraction radius — only particles inside it form the ring. */
    magnetRadius?: number;
    /** Base radius of the ring particles are arranged on. */
    ringRadius?: number;
    /** Speed of the sine wave travelling around the ring. */
    waveSpeed?: number;
    /** Amplitude of the ring wave. */
    waveAmplitude?: number;
    /** Base size of every particle (scaled by proximity + pulse). */
    particleSize?: number;
    /** Position easing per frame (smaller = softer follow). */
    lerpSpeed?: number;
    /** Particle color (any CSS color string). */
    color?: string;
    /** When the pointer is idle > 2s, the target auto-roams along a Lissajous path. */
    autoAnimate?: boolean;
    /** Randomness applied to the per-particle pulse scale. */
    particleVariance?: number;
    /** Global rotation speed of the ring around the pointer. */
    rotationSpeed?: number;
    /** Z-axis depth scaling of the particles. */
    depthFactor?: number;
    /** Speed of the per-particle pulse scaling. */
    pulseSpeed?: number;
    /** Geometry shape of each instanced particle. */
    particleShape?: 'capsule' | 'sphere' | 'box' | 'tetrahedron';
    /** Strength of the per-particle radial deviation (perturbation). */
    fieldStrength?: number;
}
/** One particle's mutable simulation state (1:1 with react-bits' particle object). */
export interface AntigravityParticle {
    /** Phase accumulator (advanced by `speed / 2` each frame). */
    t: number;
    /** Unused-by-loop scatter factor (kept for source fidelity). */
    factor: number;
    /** Per-particle animation speed. */
    speed: number;
    /** Unused-by-loop axis spread (kept for source fidelity). */
    xFactor: number;
    /** Unused-by-loop axis spread (kept for source fidelity). */
    yFactor: number;
    /** Unused-by-loop axis spread (kept for source fidelity). */
    zFactor: number;
    /** Resting x position. */
    mx: number;
    /** Resting y position. */
    my: number;
    /** Resting z position. */
    mz: number;
    /** Current (eased) x position. */
    cx: number;
    /** Current (eased) y position. */
    cy: number;
    /** Current (eased) z position. */
    cz: number;
    /** Unused-by-loop velocity (kept for source fidelity). */
    vx: number;
    /** Unused-by-loop velocity (kept for source fidelity). */
    vy: number;
    /** Unused-by-loop velocity (kept for source fidelity). */
    vz: number;
    /** Per-particle random offset applied to the ring radius. */
    randomRadiusOffset: number;
}
/** Single source of truth for every <Antigravity> default (mirrors react-bits #59). */
export declare const DEFAULT_ANTIGRAVITY_PROPS: Required<AntigravityProps>;
