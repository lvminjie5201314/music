/**
 * Public prop contract for <ScrollReveal>.
 *
 * A Vue3 port of the react-bits `ScrollReveal` (#52). The child text is supplied
 * through the **default slot** (react-bits `children`), so it is intentionally
 * absent from this interface. The reveal is scrubbed to scroll position via the
 * bundled `gsap` + `ScrollTrigger`.
 */
export interface ScrollRevealProps {
    /**
     * When `true`, the component renders its own inner scroll container and uses
     * it as the ScrollTrigger scroller. When `false` (default) the
     * window/viewport is used. Mirrors the react-bits `scrollContainerRef` option.
     */
    scrollable?: boolean;
    /** Apply a blur → sharp reveal to each word. */
    enableBlur?: boolean;
    /** Starting opacity of each word before it scrolls into view (0–1). */
    baseOpacity?: number;
    /** Starting rotation (deg) of the whole heading before the reveal. */
    baseRotation?: number;
    /** Blur radius (px) applied to each word at the start of the reveal. */
    blurStrength?: number;
    /** Extra CSS class appended to the root `<h2>` heading element. */
    containerClassName?: string;
    /** Extra CSS class appended to the inner text `<p>` element. */
    textClassName?: string;
    /**
     * ScrollTrigger `end` for the heading rotation tween (e.g. `'bottom bottom'`).
     * @see https://gsap.com/docs/v3/Plugins/ScrollTrigger/
     */
    rotationEnd?: string;
    /**
     * ScrollTrigger `end` for the per-word opacity / blur tween.
     * @see https://gsap.com/docs/v3/Plugins/ScrollTrigger/
     */
    wordAnimationEnd?: string;
}
