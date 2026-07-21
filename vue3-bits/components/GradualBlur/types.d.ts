import { CSSProperties } from 'vue';
/**
 * Preset identifiers for `<GradualBlur>`.
 *
 * Position presets (`top` / `bottom` / `left` / `right`) only pin the edge;
 * appearance presets (`subtle` / `intense` / `smooth` / `sharp` / `header` /
 * `footer` / `sidebar`) tune blur strength, height, curve and opacity; page
 * presets (`page-header` / `page-footer`) additionally switch `target` to
 * `'page'`. A preset seeds the configuration — any individually-passed prop
 * still overrides it.
 */
export type GradualBlurPreset = 'top' | 'bottom' | 'left' | 'right' | 'subtle' | 'intense' | 'smooth' | 'sharp' | 'header' | 'footer' | 'sidebar' | 'page-header' | 'page-footer';
/**
 * Public prop contract for `<GradualBlur>`.
 *
 * A faithful Vue 3 port of the react-bits `GradualBlur` overlay: `divCount`
 * stacked `<div>`s are rendered, each carrying an increasing
 * `backdrop-filter: blur()` plus an alpha-gradient mask oriented by `position`,
 * so a gradual blur fades in at one edge of a scroll / page container. The
 * technique is pure CSS + JS (no framer-motion / three / gsap), so there are
 * zero new runtime dependencies.
 */
export interface GradualBlurProps {
    /** Edge of the container where the gradual blur appears. */
    position?: 'top' | 'bottom' | 'left' | 'right';
    /** Base blur strength multiplier applied to every overlay div. */
    strength?: number;
    /** Height of the blur band (any CSS length, e.g. `'6rem'`). */
    height?: string;
    /** Width of the blur band; falls back to `'100%'` (vertical) / `height` (horizontal). */
    width?: string;
    /** Number of stacked overlay divs that build up the gradient. */
    divCount?: number;
    /** Use an exponential (instead of linear) blur falloff across the divs. */
    exponential?: boolean;
    /** Stacking order of the overlay. */
    zIndex?: number;
    /** Fade the overlay in; `'scroll'` also drives it from an IntersectionObserver. */
    animated?: boolean | 'scroll';
    /** CSS duration for the fade / blur transition (e.g. `'0.3s'`). */
    duration?: string;
    /** CSS easing for the fade / blur transition (e.g. `'ease-out'`). */
    easing?: string;
    /** Overall overlay opacity (0–1). */
    opacity?: number;
    /** Falloff curve used to distribute blur across the divs. */
    curve?: 'linear' | 'bezier' | 'ease-in' | 'ease-out' | 'ease-in-out';
    /** Switch height / width to the matchMedia breakpoints below. */
    responsive?: boolean;
    /** Height below 480px when `responsive`. */
    mobileHeight?: string;
    /** Height between 481–768px when `responsive`. */
    tabletHeight?: string;
    /** Height between 769–1024px when `responsive`. */
    desktopHeight?: string;
    /** Width below 480px when `responsive`. */
    mobileWidth?: string;
    /** Width between 481–768px when `responsive`. */
    tabletWidth?: string;
    /** Width between 769–1024px when `responsive`. */
    desktopWidth?: string;
    /** Named preset that seeds the configuration (individual props override). */
    preset?: GradualBlurPreset;
    /** Add `will-change` / `translateZ(0)` GPU hints to the container. */
    gpuOptimized?: boolean;
    /** Multiply `strength` by this factor while hovered (also enables pointer events). */
    hoverIntensity?: number;
    /** Anchor the overlay to the nearest positioned parent or to the page. */
    target?: 'parent' | 'page';
    /** Callback fired once the `'scroll'` animation has completed. */
    onAnimationComplete?: () => void;
    /** Extra CSS class appended to the root element. */
    className?: string;
    /** Inline styles merged onto the root element. */
    style?: CSSProperties;
}
