import { CSSProperties } from 'vue';
/**
 * Easing curves accepted by `<ClickSpark>`. Mirrors the react-bits union exactly.
 */
export type Easing = 'linear' | 'ease-in' | 'ease-out' | 'ease-in-out';
/**
 * Public prop contract for `<ClickSpark>`.
 *
 * A faithful Vue 3 port of the react-bits `ClickSpark` canvas effect: a wrapper
 * element (default slot) with a `<canvas>` overlay that paints a short burst of
 * `sparkCount` line-sparks radiating from the click point, each animated over
 * `duration` ms through the chosen `easing`. All rendering is hand-drawn on a
 * 2D `<canvas>` (no framer-motion / WebGL), so there are zero new runtime deps.
 *
 * Behaviour, visuals, prop names, types and defaults match the react-bits
 * source 1:1. Two props are added to follow the vue3-bits library convention
 * (consistent with the other components):
 *  - `className` — appended to the root element.
 *  - `style` — merged onto the root inline style.
 */
export interface ClickSparkProps {
    /** Stroke color of each spark line (any CSS color). */
    sparkColor?: string;
    /** Length of each spark line in px. */
    sparkSize?: number;
    /** Radial distance the spark travels from the click point (px). */
    sparkRadius?: number;
    /** Number of sparks emitted per click. */
    sparkCount?: number;
    /** Lifetime of each spark in ms. */
    duration?: number;
    /** Easing curve mapping progress (0→1) to eased travel distance. */
    easing?: Easing;
    /** Multiplier applied to the spark travel distance. */
    extraScale?: number;
    /** Extra CSS class appended to the root element. */
    className?: string;
    /** Inline styles merged onto the root element. */
    style?: CSSProperties;
}
/**
 * A single in-flight spark. `startTime` is a `performance.now()` timestamp; the
 * draw loop discards a spark once `elapsed >= duration`.
 */
export interface Spark {
    /** Click-relative X, in canvas (CSS-px) space. */
    x: number;
    /** Click-relative Y, in canvas (CSS-px) space. */
    y: number;
    /** Emission angle (radians). */
    angle: number;
    /** `performance.now()` timestamp captured when the spark was spawned. */
    startTime: number;
}
