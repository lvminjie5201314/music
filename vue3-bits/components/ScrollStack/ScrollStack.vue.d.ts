import { ScrollStackProps } from './types';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {
        scrollerRef: HTMLDivElement;
    };
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<ScrollStackProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    stackComplete: () => any;
}, string, import('vue').PublicProps, Readonly<ScrollStackProps> & Readonly<{
    onStackComplete?: (() => any) | undefined;
}>, {
    className: string;
    itemDistance: number;
    itemScale: number;
    itemStackDistance: number;
    stackPosition: string;
    scaleEndPosition: string;
    baseScale: number;
    scaleDuration: number;
    rotationAmount: number;
    blurAmount: number;
    useWindowScroll: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    scrollerRef: HTMLDivElement;
}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
