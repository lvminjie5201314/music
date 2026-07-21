import { TextTypeProps } from './types';
declare const _default: import('vue').DefineComponent<TextTypeProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "sentence-complete": (text: string, index: number) => any;
}, string, import('vue').PublicProps, Readonly<TextTypeProps> & Readonly<{
    "onSentence-complete"?: ((text: string, index: number) => any) | undefined;
}>, {
    loop: boolean;
    className: string;
    text: string | string[];
    texts: string | string[];
    tag: string;
    typingSpeed: number;
    initialDelay: number;
    pauseDuration: number;
    deletingSpeed: number;
    showCursor: boolean;
    hideCursorWhileTyping: boolean;
    cursorCharacter: string;
    cursorClassName: string;
    cursorBlinkDuration: number;
    textColors: string[];
    variableSpeed: {
        min: number;
        max: number;
    } | null;
    variableSpeedEnabled: boolean;
    variableSpeedMin: number;
    variableSpeedMax: number;
    startOnVisible: boolean;
    reverseMode: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    containerRef: unknown;
}, any>;
export default _default;
