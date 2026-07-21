import { ScrollRevealProps } from './types';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
        default?(_: {}): any;
    };
    refs: {
        scrollerRef: HTMLDivElement;
        containerRef: HTMLHeadingElement;
        textRef: HTMLParagraphElement;
    };
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<ScrollRevealProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<ScrollRevealProps> & Readonly<{}>, {
    scrollable: boolean;
    enableBlur: boolean;
    baseOpacity: number;
    baseRotation: number;
    blurStrength: number;
    containerClassName: string;
    textClassName: string;
    rotationEnd: string;
    wordAnimationEnd: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    scrollerRef: HTMLDivElement;
    containerRef: HTMLHeadingElement;
    textRef: HTMLParagraphElement;
}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
