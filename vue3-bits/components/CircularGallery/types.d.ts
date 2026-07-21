/**
 * Public prop contract for <CircularGallery>.
 *
 * A Vue3 port of the react-bits `CircularGallery`. The WebGL engine reuses the
 * bundled `ogl` dependency (no new dependency), see `gallery.ts`.
 */
export interface GalleryItem {
    /** Image URL (or data URI) rendered on the plane. */
    image: string;
    /** Caption drawn beneath the plane. */
    text: string;
}
export interface CircularGalleryProps {
    /** Gallery items. Falls back to a built-in default set when omitted. */
    items?: GalleryItem[];
    /** Curvature amount (0 = flat). */
    bend?: number;
    /** Caption / label color. */
    textColor?: string;
    /** Corner radius of each plane (0..1 in react-bits units). */
    borderRadius?: number;
    /** Canvas font string, e.g. `'bold 30px Figtree'`. */
    font?: string;
    /** Optional font stylesheet or file URL loaded on demand. */
    fontUrl?: string;
    /** Scroll sensitivity. */
    scrollSpeed?: number;
    /** Scroll easing factor (0..1). */
    scrollEase?: number;
    /** Placeholder card background color shown before/while images load. */
    cardBackgroundColor?: string;
}
