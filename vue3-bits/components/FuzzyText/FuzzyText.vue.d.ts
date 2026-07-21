import { FuzzyTextProps } from './types';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {
        canvasRef: HTMLCanvasElement;
        probeRef: HTMLSpanElement;
    };
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<FuzzyTextProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<FuzzyTextProps> & Readonly<{}>, {
    color: string;
    direction: "horizontal" | "vertical" | "both";
    className: string;
    text: string;
    fontSize: number | string;
    fontWeight: string | number;
    fontFamily: string;
    enableHover: boolean;
    baseIntensity: number;
    hoverIntensity: number;
    fuzzRange: number;
    fps: number;
    transitionDuration: number;
    clickEffect: boolean;
    glitchMode: boolean;
    glitchInterval: number;
    glitchDuration: number;
    gradient: string[] | null;
    letterSpacing: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    canvasRef: HTMLCanvasElement;
    probeRef: HTMLSpanElement;
}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
