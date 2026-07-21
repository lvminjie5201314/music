import { ElasticSliderProps } from './types';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        leftIcon?(_: {}): any;
        rightIcon?(_: {}): any;
    };
    refs: {
        wrapperRef: HTMLDivElement;
        leftIconRef: HTMLSpanElement;
        sliderRef: HTMLDivElement;
        trackWrapRef: HTMLDivElement;
        rightIconRef: HTMLSpanElement;
    };
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<ElasticSliderProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<ElasticSliderProps> & Readonly<{}>, {
    className: string;
    defaultValue: number;
    startingValue: number;
    maxValue: number;
    isStepped: boolean;
    stepSize: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    wrapperRef: HTMLDivElement;
    leftIconRef: HTMLSpanElement;
    sliderRef: HTMLDivElement;
    trackWrapRef: HTMLDivElement;
    rightIconRef: HTMLSpanElement;
}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
