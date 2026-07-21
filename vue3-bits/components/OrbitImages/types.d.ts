/**
 * Public prop contract for <OrbitImages>.
 *
 * A faithful Vue 3 port of the react-bits `OrbitImages` (#57) orbiting-images
 * effect. Each image travels along a configurable SVG path (ellipse / circle /
 * square / rectangle / triangle / star / heart / infinity / wave / custom),
 * evenly distributed when `fill` is on, driven by a hand-rolled
 * `requestAnimationFrame` loop (no framer-motion, no new runtime dependency).
 */
export type OrbitShape = 'ellipse' | 'circle' | 'square' | 'rectangle' | 'triangle' | 'star' | 'heart' | 'infinity' | 'wave' | 'custom';
export interface OrbitImagesProps {
    /** Image URLs to orbit. */
    images?: string[];
    /** Prefix for each image's generated `alt` text. */
    altPrefix?: string;
    /** Path shape the images travel along. */
    shape?: OrbitShape;
    /** Custom SVG path `d` string (used when `shape === 'custom'`). */
    customPath?: string;
    /** Design-space width/height of the orbit canvas (coordinate system for the path). */
    baseWidth?: number;
    /** Ellipse / rectangle / infinity / wave horizontal radius (design px). */
    radiusX?: number;
    /** Ellipse / rectangle / infinity / wave vertical radius (design px). */
    radiusY?: number;
    /** Fallback radius for circle / square / triangle / star / heart (design px). */
    radius?: number;
    /** Number of points for the `star` shape. */
    starPoints?: number;
    /** Inner/outer radius ratio for the `star` shape (0..1). */
    starInnerRatio?: number;
    /** Whole-orbit rotation in degrees (tilts the path). */
    rotation?: number;
    /** Seconds for one full orbit. */
    duration?: number;
    /** Size (px) of each orbiting item. */
    itemSize?: number;
    /** Orbit direction. */
    direction?: 'normal' | 'reverse';
    /** Distribute items evenly along the whole path (vs. all placed at 0%). */
    fill?: boolean;
    /** Container width: number (px) or '100%'. */
    width?: number | '100%';
    /** Container height: number (px) or 'auto'. */
    height?: number | 'auto';
    /** Extra CSS class appended to the container. */
    className?: string;
    /** Render the travel path as an SVG overlay. */
    showPath?: boolean;
    /** Stroke color of the path overlay. */
    pathColor?: string;
    /** Stroke width of the path overlay (design px). */
    pathWidth?: number;
    /** Timing function for the orbit motion. */
    easing?: 'linear' | 'easeIn' | 'easeOut' | 'easeInOut';
    /** Pause the orbit animation. */
    paused?: boolean;
    /**
     * Content rendered at the orbit center. Supplied as a string for convenience;
     * richer (VNode) content can be passed through the `center` slot. This is the
     * only deliberate simplification from react-bits' `centerContent: ReactNode`.
     */
    centerContent?: string;
    /** Scale the design space to fit the container width (responsive). */
    responsive?: boolean;
}
