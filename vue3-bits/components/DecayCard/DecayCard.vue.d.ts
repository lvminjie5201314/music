import { DecayCardProps } from './types';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {
        contentRef: HTMLDivElement;
        displacementMapRef: SVGFEDisplacementMapElement;
    };
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<DecayCardProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<DecayCardProps> & Readonly<{}>, {
    width: number;
    height: number;
    image: string;
    baseFrequency: number;
    numOctaves: number;
    seed: number;
    maxDisplacement: number;
    movementBound: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    contentRef: HTMLDivElement;
    displacementMapRef: SVGFEDisplacementMapElement;
}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
