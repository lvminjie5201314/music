import { VNode } from 'vue';
/** Spring configuration for the card re-stacking animation. */
export interface StackAnimationConfig {
    stiffness: number;
    damping: number;
}
/** Public props for `<Stack>`. A Vue3 port of react-bits `Stack`. */
export interface StackProps {
    /** Give each card a small random resting rotation. */
    randomRotation?: boolean;
    /** Drag distance (px) past which a card is sent to the back. */
    sensitivity?: number;
    /** Click a card to send it to the back. */
    sendToBackOnClick?: boolean;
    /** Card nodes. Falls back to 4 built-in demo images when omitted/empty. */
    cards?: VNode[];
    /** Spring config for the re-stack animation. */
    animationConfig?: StackAnimationConfig;
    /** Auto-advance the stack on an interval. */
    autoplay?: boolean;
    /** Autoplay interval (ms). */
    autoplayDelay?: number;
    /** Pause autoplay while hovered. */
    pauseOnHover?: boolean;
    /** On mobile, disable drag and require a click to advance. */
    mobileClickOnly?: boolean;
    /** Viewport width (px) below which `mobileClickOnly` applies. */
    mobileBreakpoint?: number;
    /** Extra class on the root element. */
    className?: string;
}
/** 1:1 defaults mirroring the react-bits `Stack`. */
export declare const DEFAULT_STACK_PROPS: {
    readonly randomRotation: false;
    readonly sensitivity: 100;
    readonly sendToBackOnClick: false;
    readonly animationConfig: {
        readonly stiffness: 260;
        readonly damping: 20;
    };
    readonly autoplay: false;
    readonly autoplayDelay: 3000;
    readonly pauseOnHover: false;
    readonly mobileClickOnly: false;
    readonly mobileBreakpoint: 768;
    readonly className: "";
};
