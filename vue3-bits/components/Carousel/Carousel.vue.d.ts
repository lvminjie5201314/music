import { CarouselItem, CarouselProps } from './types';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        item?(_: {
            item: CarouselItem;
            index: number;
        }): any;
    };
    refs: {
        containerRef: HTMLDivElement;
        trackRef: HTMLDivElement;
    };
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<CarouselProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<CarouselProps> & Readonly<{}>, {
    autoplay: boolean;
    loop: boolean;
    round: boolean;
    className: string;
    pauseOnHover: boolean;
    items: CarouselItem[];
    autoplayDelay: number;
    baseWidth: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    containerRef: HTMLDivElement;
    trackRef: HTMLDivElement;
}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
