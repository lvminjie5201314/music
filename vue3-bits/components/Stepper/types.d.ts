import { VNode } from 'vue';
/** Status of an individual step indicator. */
export type StepStatus = 'active' | 'inactive' | 'complete';
/** Props passed to a custom step-indicator render function. */
export interface RenderStepIndicatorProps {
    step: number;
    currentStep: number;
    onStepClick: (clicked: number) => void;
}
/** Public props for the `Step` sub-component (a thin content wrapper). */
export interface StepProps {
    className?: string;
}
/** Public props for `<Stepper>`. A Vue3 port of react-bits `Stepper`. */
export interface StepperProps {
    /** The step index to start on (1-based). */
    initialStep?: number;
    /** Fired whenever the active step changes (react-bits callback-prop style). */
    onStepChange?: (step: number) => void;
    /** Fired once the final "Complete" action is triggered. */
    onFinalStepCompleted?: () => void;
    /** Extra class on the outer step-circle container. */
    stepCircleContainerClassName?: string;
    /** Extra class on the indicator row. */
    stepContainerClassName?: string;
    /** Extra class on the content wrapper. */
    contentClassName?: string;
    /** Extra class on the footer. */
    footerClassName?: string;
    /** Native attributes merged onto the Back button. */
    backButtonProps?: Record<string, unknown>;
    /** Native attributes merged onto the Next/Complete button. */
    nextButtonProps?: Record<string, unknown>;
    /** Label for the Back button. */
    backButtonText?: string;
    /** Label for the Next button. */
    nextButtonText?: string;
    /** Disable clicking indicators to jump between steps. */
    disableStepIndicators?: boolean;
    /** Custom indicator renderer (overrides the built-in pill indicators). */
    renderStepIndicator?: (props: RenderStepIndicatorProps) => VNode;
    /** Extra class on the root element. */
    className?: string;
}
/** 1:1 defaults mirroring the react-bits `Stepper`. */
export declare const DEFAULT_STEPPER_PROPS: {
    readonly initialStep: 1;
    readonly backButtonText: "Back";
    readonly nextButtonText: "Continue";
    readonly disableStepIndicators: false;
    readonly stepCircleContainerClassName: "";
    readonly stepContainerClassName: "";
    readonly contentClassName: "";
    readonly footerClassName: "";
    readonly className: "";
};
