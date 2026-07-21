import { CSSProperties, VNode } from 'vue';
/**
 * A single logo entry in the marquee.
 *
 * Faithful Vue 3 port of the react-bits `LogoLoop` `LogoItem` union:
 *  - **node variant** — `node` is a raw `VNode` (the React `ReactNode` equivalent).
 *    It is rendered as custom content. `href`/`title`/`ariaLabel` are optional
 *    metadata used for the wrapping link and accessibility label.
 *  - **image variant** — `src` is required and the rest are standard `<img>`
 *    attributes. Falls back to the built-in `<img>` renderer.
 *
 * In practice custom content should be supplied via the scoped `#item` slot of
 * `<LogoLoop>`; the `node` form is kept for 1:1 contract fidelity with the
 * source and for headless usage without a template slot.
 */
export type LogoItem = {
    /** Custom content as a raw Vue `VNode` (React `ReactNode` equivalent). */
    node?: VNode;
    /** Optional link target; when present the item is wrapped in an `<a>`. */
    href?: string;
    /** Human-readable title (used for the fallback text box / aria-label). */
    title?: string;
    /** Explicit accessibility label for the node item. */
    ariaLabel?: string;
} | {
    /** Image source (required for the image variant). */
    src: string;
    /** Alternative text for the image. */
    alt?: string;
    /** Optional link target; when present the item is wrapped in an `<a>`. */
    href?: string;
    /** Human-readable title (used for the aria-label fallback). */
    title?: string;
    /** `<img srcset>` attribute. */
    srcSet?: string;
    /** `<img sizes>` attribute. */
    sizes?: string;
    /** Intrinsic image width. */
    width?: number;
    /** Intrinsic image height. */
    height?: number;
};
/**
 * Public prop contract for `<LogoLoop>`.
 *
 * A faithful Vue 3 port of the react-bits `LogoLoop` infinite logo marquee.
 * All rendering is hand-rolled (requestAnimationFrame + CSS), so there are zero
 * new runtime dependencies (no three / gsap / framer-motion).
 *
 * Defaults are taken 1:1 from the authoritative `react-bits.md` source code:
 * `speed = 120`, `direction = 'left'`, `width = '100%'`, `logoHeight = 28`,
 * `gap = 32`, `fadeOut = false`, `scaleOnHover = false`,
 * `ariaLabel = 'Partner logos'`.
 */
export interface LogoLoopProps {
    /** The list of logos to render and scroll. */
    logos: LogoItem[];
    /** Scroll speed in px/s (sign flips direction; magnitude is the speed). */
    speed?: number;
    /** Scroll direction: `left` | `right` | `up` | `down`. */
    direction?: 'left' | 'right' | 'up' | 'down';
    /** Container width (number → px, or any CSS length string). */
    width?: number | string;
    /** Rendered logo height in px (images are auto-scaled to this height). */
    logoHeight?: number;
    /** Gap between logos in px. */
    gap?: number;
    /** Slow to `hoverSpeed` (or stop) while the pointer is over the marquee. */
    pauseOnHover?: boolean;
    /** Velocity (px/s) the marquee eases to while hovered. */
    hoverSpeed?: number;
    /** Draw a gradient fade mask at the edges. */
    fadeOut?: boolean;
    /** Color of the fade mask (defaults to white / dark-aware auto color). */
    fadeOutColor?: string;
    /** Scale each logo up on hover. */
    scaleOnHover?: boolean;
    /**
     * Headless custom renderer `(item, key) => VNode`.
     * Kept for 1:1 contract fidelity; the scoped `#item` slot takes precedence
     * over the built-in fallback and is the recommended way to supply custom
     * content.
     */
    renderItem?: (item: LogoItem, key: string) => VNode;
    /** Accessibility label for the marquee region. */
    ariaLabel?: string;
    /** Extra CSS class appended to the root element. */
    className?: string;
    /** Inline CSS style merged onto the root element. */
    style?: CSSProperties;
}
