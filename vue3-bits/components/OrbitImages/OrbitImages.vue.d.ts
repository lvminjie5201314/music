import { OrbitImagesProps } from './types';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        center?(_: {}): any;
    };
    refs: {
        containerRef: HTMLDivElement;
    };
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<OrbitImagesProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<OrbitImagesProps> & Readonly<{}>, {
    width: number | "100%";
    height: number | "auto";
    fill: boolean;
    shape: import('./types').OrbitShape;
    rotation: number;
    duration: number;
    paused: boolean;
    itemSize: number;
    direction: "normal" | "reverse";
    radius: number;
    images: string[];
    className: string;
    altPrefix: string;
    customPath: string;
    baseWidth: number;
    radiusX: number;
    radiusY: number;
    starPoints: number;
    starInnerRatio: number;
    showPath: boolean;
    pathColor: string;
    pathWidth: number;
    easing: "linear" | "easeIn" | "easeOut" | "easeInOut";
    centerContent: string;
    responsive: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    containerRef: HTMLDivElement;
}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
