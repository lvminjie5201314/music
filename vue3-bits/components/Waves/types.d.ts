/**
 * Public prop contract for <Waves>.
 *
 * A faithful Vue3 / TypeScript port of the react-bits `Waves` Canvas2D
 * background. Every prop is optional and defaults to the react-bits values
 * (applied in the SFC via `withDefaults`). The perlin-noise field that drives
 * the wave motion is a 1:1 port of the react-bits `Noise` class.
 */
/** Public props for <Waves>. All optional. */
export interface WavesProps {
    /** Stroke color of the wave lines. */
    lineColor?: string;
    /** Canvas background color (any CSS color). */
    backgroundColor?: string;
    /** Horizontal noise scroll speed. */
    waveSpeedX?: number;
    /** Vertical noise scroll speed. */
    waveSpeedY?: number;
    /** Horizontal wave amplitude. */
    waveAmpX?: number;
    /** Vertical wave amplitude. */
    waveAmpY?: number;
    /** Horizontal gap between lines. */
    xGap?: number;
    /** Vertical gap between points. */
    yGap?: number;
    /** Cursor velocity friction (0..1). */
    friction?: number;
    /** Spring tension pulling points back to rest. */
    tension?: number;
    /** Max cursor displacement (px). */
    maxCursorMove?: number;
    /** Extra CSS class applied to the root element. */
    className?: string;
    /** Inline style merged onto the root element. */
    style?: Record<string, string>;
}
/** Single source of truth for every <Waves> default. */
export declare const DEFAULT_WAVES_PROPS: {
    readonly lineColor: "black";
    readonly backgroundColor: "transparent";
    readonly waveSpeedX: 0.0125;
    readonly waveSpeedY: 0.005;
    readonly waveAmpX: 32;
    readonly waveAmpY: 16;
    readonly xGap: 10;
    readonly yGap: 32;
    readonly friction: 0.925;
    readonly tension: 0.005;
    readonly maxCursorMove: 100;
    readonly className: "";
    readonly style: undefined;
};
