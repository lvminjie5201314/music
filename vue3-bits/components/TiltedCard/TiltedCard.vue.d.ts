import { TiltedCardProps } from './types';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        overlayContent?(_: {}): any;
    };
    refs: {
        figureRef: HTMLElement;
        innerRef: HTMLDivElement;
        captionRef: HTMLElement;
    };
    rootEl: HTMLElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<TiltedCardProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<TiltedCardProps> & Readonly<{}>, {
    containerHeight: string;
    imageSrc: string;
    altText: string;
    captionText: string;
    containerWidth: string;
    imageHeight: string;
    imageWidth: string;
    scaleOnHover: number;
    rotateAmplitude: number;
    showMobileWarning: boolean;
    showTooltip: boolean;
    displayOverlayContent: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    figureRef: HTMLElement;
    innerRef: HTMLDivElement;
    captionRef: HTMLElement;
}, HTMLElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
