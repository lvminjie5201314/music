/**
 * Public prop contract for <ChromaGrid>.
 *
 * A Vue3 port of the react-bits `ChromaGrid`: a responsive grid of spotlight
 * cards. Pointer movement over the grid drives a radial grayscale "mask"
 * (the `--x` / `--y` CSS variables) via gsap, and each card shows a per-card
 * spotlight on hover. Every prop maps 1:1 to the react-bits component.
 */
/** A single card in the grid. */
export interface ChromaItem {
    image: string;
    title: string;
    subtitle: string;
    handle?: string;
    location?: string;
    borderColor?: string;
    gradient?: string;
    url?: string;
}
/** Props accepted by <ChromaGrid>. */
export interface ChromaGridProps {
    /** Card data. Falls back to a built-in demo set when omitted/empty. */
    items?: ChromaItem[];
    /** Extra CSS class appended to the grid root. */
    className?: string;
    /** Radius (px) of the focus spotlight mask. */
    radius?: number;
    /** Number of grid columns. */
    columns?: number;
    /** Number of grid rows. */
    rows?: number;
    /** Pointer-follow easing duration (seconds). */
    damping?: number;
    /** Grayscale fade-out duration (seconds) when the pointer leaves. */
    fadeOut?: number;
    /** gsap easing function name. */
    ease?: string;
}
/** Default demo cards used when `items` is not provided. */
export declare const DEFAULT_CHROMA_ITEMS: ChromaItem[];
