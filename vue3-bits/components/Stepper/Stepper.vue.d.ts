import { VNode } from 'vue';
import { StepperProps } from './types';
declare const _default: import('vue').DefineComponent<StepperProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    stepChange: (step: number) => any;
    finalStepCompleted: () => any;
}, string, import('vue').PublicProps, Readonly<StepperProps> & Readonly<{
    onStepChange?: ((step: number) => any) | undefined;
    onFinalStepCompleted?: (() => any) | undefined;
}>, {
    className: string;
    initialStep: number;
    onStepChange: (step: number) => void;
    onFinalStepCompleted: () => void;
    stepCircleContainerClassName: string;
    stepContainerClassName: string;
    contentClassName: string;
    footerClassName: string;
    backButtonProps: Record<string, unknown>;
    nextButtonProps: Record<string, unknown>;
    backButtonText: string;
    nextButtonText: string;
    disableStepIndicators: boolean;
    renderStepIndicator: (props: import('./types').RenderStepIndicatorProps) => VNode;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
