/**
 * Public prop contract for <FuzzyText>.
 *
 * A Vue3 port of the react-bits `FuzzyText` canvas fuzz effect. The text is read
 * from the `text` prop first; if empty, the default slot's content is used as a
 * fallback (decision 1). All animation is drawn with the native Canvas 2D API —
 * no extra runtime dependency.
 */
export interface FuzzyTextProps {
    /** Text to render. Falls back to the default slot when empty. */
    text?: string;
    /** Font size (number => px, or any CSS length string). */
    fontSize?: number | string;
    /** Font weight (number or CSS keyword). */
    fontWeight?: string | number;
    /** Font family; `'inherit'` resolves to the canvas' computed family. */
    fontFamily?: string;
    /** Solid text color (ignored when `gradient` is set). */
    color?: string;
    /** Enable hover-based intensity boost. */
    enableHover?: boolean;
    /** Resting fuzz intensity. */
    baseIntensity?: number;
    /** Fuzz intensity while hovered. */
    hoverIntensity?: number;
    /** Maximum pixel jitter range. */
    fuzzRange?: number;
    /** Target frames per second. */
    fps?: number;
    /** Fuzz jitter axis. */
    direction?: 'horizontal' | 'vertical' | 'both';
    /** If > 0, intensity eases toward its target over this many ms. */
    transitionDuration?: number;
    /** Click to briefly spike intensity to 1. */
    clickEffect?: boolean;
    /** Periodically glitch intensity to 1. */
    glitchMode?: boolean;
    /** Glitch interval (ms). */
    glitchInterval?: number;
    /** Glitch duration (ms). */
    glitchDuration?: number;
    /** Optional multi-stop gradient instead of a solid `color`. */
    gradient?: string[] | null;
    /** Extra letter spacing (px). */
    letterSpacing?: number;
    /** Extra CSS class appended to the `<canvas>`. */
    className?: string;
}
