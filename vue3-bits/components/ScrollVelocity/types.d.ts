/**
 * Public prop contract for <ScrollVelocity>.
 *
 * A Vue3 port of the react-bits `ScrollVelocity` text effect (#53). Each row of
 * text marquees horizontally at a base speed and *accelerates / reverses* with
 * the page scroll velocity. The effect is driven by a native `scroll` listener
 * + `requestAnimationFrame` (no `framer-motion` / `motion`).
 */
/** Linear map `{ input: [from, to] } → { output: [from, to] }`, extrapolated (unclamped). */
export interface VelocityMapping {
    /** Raw scroll-velocity domain (px/s). */
    input: [number, number];
    /** Extra speed-multiplier range applied on top of the base marquee. */
    output: [number, number];
}
/** A minimal React-style ref object so consumers can pass a scroll container. */
export interface ScrollContainerRef {
    /** The element whose scroll drives the velocity (defaults to `window`). */
    current: HTMLElement | null | undefined;
}
export interface ScrollVelocityProps {
    /** Optional scroll container; when omitted the component tracks `window`. */
    scrollContainerRef?: ScrollContainerRef;
    /** One marquee row per entry. Odd rows run in reverse by default. */
    texts?: (string | number)[];
    /** Base marquee speed in px/s. Odd rows use `-velocity`. */
    velocity?: number;
    /** Extra CSS class appended to every text span. */
    className?: string;
    /** Spring damping that smooths the measured scroll velocity. */
    damping?: number;
    /** Spring stiffness that smooths the measured scroll velocity. */
    stiffness?: number;
    /** Number of repeated copies per row (enables a seamless wrap loop). */
    numCopies?: number;
    /** Maps raw scroll velocity → extra speed multiplier (extrapolates, no clamp). */
    velocityMapping?: VelocityMapping;
    /** Class for the outer `overflow: hidden` wrapper. */
    parallaxClassName?: string;
    /** Class for the inner translated flex row. */
    scrollerClassName?: string;
    /** Inline style for the outer wrapper. */
    parallaxStyle?: Record<string, string>;
    /** Inline style for the inner row. */
    scrollerStyle?: Record<string, string>;
}
