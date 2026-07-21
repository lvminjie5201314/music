import { CSSProperties } from 'vue';
/**
 * Public prop contract for <PixelTransition>.
 *
 * A faithful Vue 3 port of the react-bits `PixelTransition` (#58). The component
 * cross-fades between two pieces of content (the "first" and the "second") via a
 * random pixel-grid sweep driven by the bundled `gsap`. Content is supplied
 * through slots, not props:
 *
 *  - default slot  → `firstContent`  (shown initially)
 *  - `#second` slot → `secondContent` (revealed on hover / tap)
 */
export interface PixelTransitionProps {
    /**
     * Number of rows/columns in the pixel grid. The grid contains
     * `gridSize × gridSize` pixels. Higher values produce a finer sweep.
     */
    gridSize?: number;
    /**
     * Fill color of the reveal pixels. Defaults to `'currentColor'`, which inherits
     * the card's text color (the source sets `color: var(--color-primary, #fff)`).
     */
    pixelColor?: string;
    /** Total duration (seconds) of the pixel sweep in and back out. */
    animationStepDuration?: number;
    /**
     * If `true`, the transition fires only once and never reverses on leave / tap.
     * When `false` (default) it toggles back to the first content on leave / re-tap.
     */
    once?: boolean;
    /** Extra CSS class appended to the root card element. */
    className?: string;
    /** Inline style object merged onto the root card. */
    style?: CSSProperties;
    /** `padding-top` aspect ratio of the card (e.g. `'100%'` for a square card). */
    aspectRatio?: string;
}
