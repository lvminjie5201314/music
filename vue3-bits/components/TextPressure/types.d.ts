/**
 * Public prop contract for <TextPressure>.
 *
 * A faithful Vue 3 port of the react-bits `TextPressure` "pressure" text effect.
 * The component renders each character of `text` in its own `<span>` and, driven
 * by a single `requestAnimationFrame` loop (no framer-motion / GSAP), mutates
 * every span's `font-variation-settings` (and optionally its `opacity`) based on
 * the distance between the eased pointer and the letter's center. A variable font
 * (default `Roboto Flex`) is required so the `wght` / `wdth` / `ital` axes respond.
 */
export interface TextPressureProps {
    /** The text to render. Each character becomes its own <span>. */
    text?: string;
    /** CSS font-family applied to the title. Must be a variable font for the effect to show. */
    fontFamily?: string;
    /**
     * @font-face source URL (e.g. a Google Fonts CSS endpoint) that is `@import`ed
     * through the injected `<style>`. Required so the variable axes are available.
     */
    fontUrl?: string;
    /** Let the `wdth` (width) axis react to pointer proximity (letters near the cursor stretch wide). */
    width?: boolean;
    /** Let the `wght` (weight) axis react to pointer proximity (letters near the cursor thicken). */
    weight?: boolean;
    /** Let the `ital` (italic) axis react to pointer proximity (letters near the cursor slant). */
    italic?: boolean;
    /** Let the per-letter `opacity` react to pointer proximity (letters far from the cursor fade out). */
    alpha?: boolean;
    /** Lay the letters out with `display: flex; justify-content: space-between`. */
    flex?: boolean;
    /** Draw a `strokeColor` outline behind each letter via `-webkit-text-stroke`. */
    stroke?: boolean;
    /** Stretch the title vertically so it fills the container height. */
    scale?: boolean;
    /** Fill color of the text. */
    textColor?: string;
    /** Outline color used when `stroke` is enabled. */
    strokeColor?: string;
    /** Extra CSS class appended to the title element. */
    className?: string;
    /** Minimum font size in px — the computed size never drops below this. */
    minFontSize?: number;
}
/** Shared 2D point type for pointer / letter-center positions. */
export interface PressurePoint {
    x: number;
    y: number;
}
