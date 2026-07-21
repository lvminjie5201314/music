import { VNode } from 'vue';
import { LogoItem, LogoLoopProps } from './types';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Readonly<{
        item(props: {
            item: LogoItem;
            index: number;
        }): VNode[];
    }> & {
        item(props: {
            item: LogoItem;
            index: number;
        }): VNode[];
    };
    refs: {
        containerRef: HTMLDivElement;
        trackRef: HTMLDivElement;
    };
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<LogoLoopProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<LogoLoopProps> & Readonly<{}>, {
    width: number | string;
    fadeOut: boolean;
    direction: "left" | "right" | "up" | "down";
    ariaLabel: string;
    speed: number;
    gap: number;
    scaleOnHover: boolean;
    logoHeight: number;
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
