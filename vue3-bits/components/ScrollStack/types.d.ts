/**
 * Public prop contracts for <ScrollStack> / <ScrollStackItem>.
 *
 * A Vue3 port of the react-bits `ScrollStack`. The original relies on the
 * `lenis` smooth-scroll library; this port drives the same pin/scale/blur
 * transform logic from native scroll events (no `lenis` dependency).
 */
export interface ScrollStackItemProps {
    /** Extra CSS class appended to the card. */
    itemClassName?: string;
}
export interface ScrollStackProps {
    /** Extra CSS class appended to the scroller. */
    className?: string;
    /** Vertical gap between stacked cards (px). */
    itemDistance?: number;
    /** Per-index scale increment. */
    itemScale?: number;
    /** Extra offset per card while stacking (px). */
    itemStackDistance?: number;
    /** Scroll position (px or `%`) at which cards begin pinning. */
    stackPosition?: string;
    /** Scroll position (px or `%`) at which cards reach base scale. */
    scaleEndPosition?: string;
    /** Scale of the top (last) card when fully stacked. */
    baseScale?: number;
    /** (Unused in the transform math — kept for API parity.) */
    scaleDuration?: number;
    /** Max rotation (deg) applied across the stack. */
    rotationAmount?: number;
    /** Blur (px) applied to cards buried in the stack. */
    blurAmount?: number;
    /** Use the window as the scroll container instead of the local scroller. */
    useWindowScroll?: boolean;
    /** Emitted once when the last card becomes fully stacked. */
    onStackComplete?: () => void;
}
