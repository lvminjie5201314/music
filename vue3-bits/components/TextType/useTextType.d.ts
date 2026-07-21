import { Ref, ComputedRef } from 'vue';
import { TextTypeProps } from './types';
/**
 * Vue3 port of the react-bits `TextType` typing engine.
 *
 * Faithfully reproduces the react-bits `useEffect` + recursive `setTimeout`
 * state machine, rewritten with Vue reactivity. The composable owns the typing
 * loop (`displayedText` growth / shrink), supports loop / deletion / pause /
 * variable speed / reverse / start-on-visible, and tears itself down on unmount.
 *
 * @param props          The resolved `TextTypeProps` (defaults applied by the SFC).
 * @param containerRef   Ref to the root DOM element (used for the visibility observer).
 * @param onSentenceComplete  Optional callback fired after a phrase finishes + before deletion.
 * @returns Reactive state plus `start()` / `stop()` controls.
 */
export declare function useTextType(props: TextTypeProps, containerRef: Ref<HTMLElement | null>, onSentenceComplete?: (text: string, index: number) => void): {
    displayedText: Ref<string>;
    currentCharIndex: Ref<number>;
    isDeleting: Ref<boolean>;
    currentTextIndex: Ref<number>;
    isVisible: Ref<boolean>;
    isTyping: ComputedRef<boolean>;
    start: () => void;
    stop: () => void;
};
