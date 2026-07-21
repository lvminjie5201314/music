/**
 * Public prop contract for <BlobCursor>.
 *
 * A Vue3 port of the react-bits `BlobCursor` trailing-pointer component. The
 * blobs are plain DOM elements (not WebGL) driven by gsap tweens; an optional
 * SVG `feGaussianBlur` + `feColorMatrix` filter gives them the signature gooey
 * "blob" merge. Pointer / touch position is read from the container's bounding
 * rect, so the component works inside any positioned parent.
 */
export interface BlobCursorProps {
    /** Blob outline: a soft circle or a square. */
    blobType?: 'circle' | 'square';
    /** Fill color of every blob. */
    fillColor?: string;
    /** Number of trailing blobs that follow the pointer. */
    trailCount?: number;
    /** Width/height (px) per blob, indexed by trail position (0 = lead). */
    sizes?: number[];
    /** Width/height (px) of the inner dot per blob, indexed by trail position. */
    innerSizes?: number[];
    /** Fill color of the inner dot. */
    innerColor?: string;
    /** Opacity per blob, indexed by trail position. */
    opacities?: number[];
    /** Drop-shadow color. */
    shadowColor?: string;
    /** Drop-shadow blur radius (px). */
    shadowBlur?: number;
    /** Drop-shadow offset X (px). */
    shadowOffsetX?: number;
    /** Drop-shadow offset Y (px). */
    shadowOffsetY?: number;
    /** SVG filter id (must be unique if multiple instances are mounted). */
    filterId?: string;
    /** Gaussian blur stdDeviation of the gooey filter. */
    filterStdDeviation?: number;
    /** Color-matrix values of the gooey filter (alpha contrast / threshold). */
    filterColorMatrixValues?: string;
    /** Enable the SVG gooey filter (set false for crisp blobs). */
    useFilter?: boolean;
    /** Tween duration (s) of the lead blob — snappier follow. */
    fastDuration?: number;
    /** Tween duration (s) of trailing blobs — laggier follow. */
    slowDuration?: number;
    /** gsap ease of the lead blob. */
    fastEase?: string;
    /** gsap ease of the trailing blobs. */
    slowEase?: string;
    /** z-index of the container layer. */
    zIndex?: number;
}
