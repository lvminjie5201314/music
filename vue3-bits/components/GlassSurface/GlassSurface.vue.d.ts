import { CSSProperties } from 'vue';
import { GlassSurfaceProps } from './types';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {
        containerRef: HTMLDivElement;
        feImageRef: SVGFEImageElement;
        redChannelRef: SVGFEDisplacementMapElement;
        greenChannelRef: SVGFEDisplacementMapElement;
        blueChannelRef: SVGFEDisplacementMapElement;
        gaussianBlurRef: SVGFEGaussianBlurElement;
    };
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<GlassSurfaceProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<GlassSurfaceProps> & Readonly<{}>, {
    width: number | string;
    height: number | string;
    blur: number;
    style: CSSProperties;
    opacity: number;
    className: string;
    mixBlendMode: import('./types').MixBlendMode;
    borderRadius: number;
    borderWidth: number;
    saturation: number;
    brightness: number;
    displace: number;
    backgroundOpacity: number;
    distortionScale: number;
    redOffset: number;
    greenOffset: number;
    blueOffset: number;
    xChannel: "R" | "G" | "B";
    yChannel: "R" | "G" | "B";
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    containerRef: HTMLDivElement;
    feImageRef: SVGFEImageElement;
    redChannelRef: SVGFEDisplacementMapElement;
    greenChannelRef: SVGFEDisplacementMapElement;
    blueChannelRef: SVGFEDisplacementMapElement;
    gaussianBlurRef: SVGFEGaussianBlurElement;
}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
