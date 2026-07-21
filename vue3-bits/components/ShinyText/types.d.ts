/**
 * Public prop contract for <ShinyText>.
 *
 * A Vue3 port of the react-bits `ShinyText` streaming-shine text animation.
 * The animation progress is driven by `useRafProgress`; this file only declares
 * the (optional) prop surface and mirrors the react-bits defaults.
 */
export interface ShinyTextProps {
    /** The text to render with the shine sweep. */
    text?: string;
    /** Stop the rAF loop entirely. */
    disabled?: boolean;
    /** Animation duration in seconds. */
    speed?: number;
    /** Extra CSS class appended to the root `<span>`. */
    className?: string;
    /** Base text color (the un-lit portions). */
    color?: string;
    /** Highlight / shine color. */
    shineColor?: string;
    /** Gradient angle in degrees. */
    spread?: number;
    /** Ping-pong 0→100→0 (4 phases) instead of a single sweep + hold. */
    yoyo?: boolean;
    /** Pause the sweep while hovered. */
    pauseOnHover?: boolean;
    /** Sweep direction; `'right'` mirrors the progress. */
    direction?: 'left' | 'right';
    /** Hold time at the endpoints (seconds) — used by the yoyo phases. */
    delay?: number;
}
