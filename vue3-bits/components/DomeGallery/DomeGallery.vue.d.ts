import { DomeGalleryProps, ImageItem } from './types';
declare const _default: import('vue').DefineComponent<DomeGalleryProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<DomeGalleryProps> & Readonly<{}>, {
    segments: number;
    images: ImageItem[];
    fit: number;
    fitBasis: "auto" | "min" | "max" | "width" | "height";
    minRadius: number;
    maxRadius: number;
    padFactor: number;
    overlayBlurColor: string;
    maxVerticalRotationDeg: number;
    dragSensitivity: number;
    enlargeTransitionMs: number;
    dragDampening: number;
    openedImageWidth: string;
    openedImageHeight: string;
    imageBorderRadius: string;
    openedImageBorderRadius: string;
    grayscale: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    rootRef: HTMLDivElement;
    mainRef: HTMLElement;
    sphereRef: HTMLDivElement;
    viewerRef: HTMLDivElement;
    scrimRef: HTMLDivElement;
    frameRef: HTMLDivElement;
}, HTMLDivElement>;
export default _default;
