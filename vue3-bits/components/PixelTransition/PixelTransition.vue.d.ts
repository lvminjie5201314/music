import { CSSProperties } from 'vue';
import { PixelTransitionProps } from './types';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
        second?(_: {}): any;
    };
    refs: {
        containerRef: HTMLDivElement;
        activeRef: HTMLDivElement;
        pixelGridRef: HTMLDivElement;
    };
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<PixelTransitionProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<PixelTransitionProps> & Readonly<{}>, {
    style: CSSProperties;
    className: string;
    once: boolean;
    aspectRatio: string;
    gridSize: number;
    pixelColor: string;
    animationStepDuration: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    containerRef: HTMLDivElement;
    activeRef: HTMLDivElement;
    pixelGridRef: HTMLDivElement;
}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
