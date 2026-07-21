/**
 * Public prop contract for <Counter>.
 *
 * A Vue3 port of the react-bits `Counter`. The original animates each digit
 * column with `motion/react` (`useSpring` + `useTransform`). This port keeps
 * `gsap` as a bundled runtime dependency (no `motion/react`): each decimal
 * column is a 0–9 odometer whose `translateY` is driven by a gsap tween that
 * springs the current value toward the target, producing the same rolling
 * digit effect.
 */
export type PlaceValue = number | '.';
export interface CounterProps {
    /** The numeric value to display (the odometer rolls to this number). */
    value: number;
    /** Font size in px; also drives each digit column's line height. */
    fontSize?: number;
    /** Extra vertical padding added to the digit column height. */
    padding?: number;
    /**
     * Array of place values that decides which digit positions are shown. Use
     * `'.'` for the decimal point. When omitted, the places are derived from the
     * current `value` (e.g. `7.2` → `[1, '.', 0.1]`).
     */
    places?: PlaceValue[];
    /** Gap between digit columns (px). */
    gap?: number;
    /** Border radius of the counter (px). */
    borderRadius?: number;
    /** Horizontal padding inside the counter (px). */
    horizontalPadding?: number;
    /** Text color (CSS color). */
    textColor?: string;
    /** Font weight (number or CSS keyword). */
    fontWeight?: number | string;
    /** Inline style for the root container. */
    containerStyle?: Record<string, string | number>;
    /** Inline style for the inner counter row. */
    counterStyle?: Record<string, string | number>;
    /** Inline style applied to every digit column. */
    digitStyle?: Record<string, string | number>;
    /** Height of the top/bottom fade gradients (px). */
    gradientHeight?: number;
    /** Color the fade gradients fade *from* (toward the center). */
    gradientFrom?: string;
    /** Color the fade gradients fade *to* (toward the edges). */
    gradientTo?: string;
    /** Override style for the top fade gradient. */
    topGradientStyle?: Record<string, string | number>;
    /** Override style for the bottom fade gradient. */
    bottomGradientStyle?: Record<string, string | number>;
    /** Extra CSS class for the root container. */
    className?: string;
}
export declare const DEFAULT_COUNTER_PROPS: {
    value: number;
    fontSize: number;
    padding: number;
    gap: number;
    borderRadius: number;
    horizontalPadding: number;
    textColor: string;
    fontWeight: string;
    gradientHeight: number;
    gradientFrom: string;
    gradientTo: string;
    className: string;
};
