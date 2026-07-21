/**
 * Public prop contract for <DomeGallery>.
 *
 * A Vue3 port of the react-bits `DomeGallery`: a 3D sphere of image tiles you
 * can drag to rotate, with an "enlarge" overlay on click. The original React
 * component relied on `@use-gesture/react`; this port replaces that dependency
 * with **native pointer events** (pointerdown / pointermove / pointerup) so no
 * extra npm package is introduced.
 */
/** A gallery image: either a bare URL string or an object with `src` + `alt`. */
export type ImageItem = string | {
    src: string;
    alt?: string;
};
/** Props accepted by <DomeGallery>. */
export interface DomeGalleryProps {
    images?: ImageItem[];
    fit?: number;
    fitBasis?: 'auto' | 'min' | 'max' | 'width' | 'height';
    minRadius?: number;
    maxRadius?: number;
    padFactor?: number;
    overlayBlurColor?: string;
    maxVerticalRotationDeg?: number;
    dragSensitivity?: number;
    enlargeTransitionMs?: number;
    segments?: number;
    dragDampening?: number;
    openedImageWidth?: string;
    openedImageHeight?: string;
    imageBorderRadius?: string;
    openedImageBorderRadius?: string;
    grayscale?: boolean;
}
/** A resolved tile definition placed on the sphere. */
export interface ItemDef {
    src: string;
    alt: string;
    x: number;
    y: number;
    sizeX: number;
    sizeY: number;
}
/** Built-in demo images used when `images` is not provided. */
export declare const DEFAULT_IMAGES: ImageItem[];
/** Default scalar values (mirrors the react-bits component). */
export declare const DOME_DEFAULTS: {
    maxVerticalRotationDeg: number;
    dragSensitivity: number;
    enlargeTransitionMs: number;
    segments: number;
};
