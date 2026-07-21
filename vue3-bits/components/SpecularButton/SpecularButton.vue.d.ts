import { SpecularButtonProps } from './types';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {
        btnRef: HTMLButtonElement;
        fxRef: HTMLSpanElement;
    };
    rootEl: HTMLButtonElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<SpecularButtonProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    click: (ev: MouseEvent) => any;
}, string, import('vue').PublicProps, Readonly<SpecularButtonProps> & Readonly<{
    onClick?: ((ev: MouseEvent) => any) | undefined;
}>, {
    blur: number;
    type: "button" | "submit" | "reset";
    radius: number;
    intensity: number;
    size: "sm" | "md" | "lg";
    thickness: number;
    className: string;
    tint: string;
    speed: number;
    disabled: boolean;
    textColor: string;
    proximity: number;
    followMouse: boolean;
    baseColor: string;
    lineColor: string;
    autoAnimate: boolean;
    tintOpacity: number;
    shineSize: number;
    shineFade: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    btnRef: HTMLButtonElement;
    fxRef: HTMLSpanElement;
}, HTMLButtonElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
