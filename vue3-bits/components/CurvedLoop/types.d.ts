/**
 * Public prop contract for <CurvedLoop>.
 *
 * A Vue3 port of the react-bits `CurvedLoop` marquee that runs text along an
 * SVG curve. The path `id` uses a module-level counter (NOT `useId()`, which is
 * unavailable on the `vue@^3.4.0` peer) to stay compatible with older Vue.
 */
export interface CurvedLoopProps {
    /** The marquee text. A trailing space / nbsp is normalized and re-appended. */
    marqueeText?: string;
    /** `startOffset` step per frame (in SVG user units). */
    speed?: number;
    /** Extra CSS class appended to the text element. */
    className?: string;
    /** Bezier control-point vertical offset that shapes the curve. */
    curveAmount?: number;
    /** Marquee direction; `'right'` reverses the step. */
    direction?: 'left' | 'right';
    /** Enable click-and-drag to scrub the marquee. */
    interactive?: boolean;
}
