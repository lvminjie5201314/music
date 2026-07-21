/**
 * Public prop contract for <TextType>.
 *
 * A Vue3 port of the react-bits `TextType` text-typing animation. Every prop is
 * optional and most default inside the SFC via `withDefaults`; the defaults
 * listed in the JSDoc mirror the react-bits values so the API stays equivalent.
 */
/** Public props for <TextType>. All optional. */
export interface TextTypeProps {
    /** 要轮流打字的短语。传入字符串会被当作单元素数组处理。 */
    text?: string | string[];
    /** `text` 的别名（较新的 react-bits API）。仅在未提供 `text` 时使用。 */
    texts?: string | string[];
    /** 根元素的标签名。默认 'div'。 */
    tag?: string;
    /** 打字时每字符的耗时（毫秒）。默认 50。 */
    typingSpeed?: number;
    /** 开始打字前的延迟（毫秒）。默认 0。 */
    initialDelay?: number;
    /** 一句完成后到开始删除前的停顿（毫秒）。默认 2000。 */
    pauseDuration?: number;
    /** 删除时每字符的耗时（毫秒）。默认 30。 */
    deletingSpeed?: number;
    /** 是否无限循环播放所有短语。默认 true。 */
    loop?: boolean;
    /** 附加到根元素的额外 CSS 类。 */
    className?: string;
    /** 是否显示闪烁光标。默认 true。 */
    showCursor?: boolean;
    /** 打字过程中隐藏光标（仅在空闲时显示）。默认 false。 */
    hideCursorWhileTyping?: boolean;
    /** 光标的字形（字符）。默认 '|'。 */
    cursorCharacter?: string;
    /** 附加到光标元素的额外 CSS 类。 */
    cursorClassName?: string;
    /** 光标闪烁周期（秒）。默认 0.5。 */
    cursorBlinkDuration?: number;
    /** 逐句文字颜色数组（按索引循环使用）。 */
    textColors?: string[];
    /** 变速打字的随机速度区间 {min,max}（单位毫秒）。 */
    variableSpeed?: {
        min: number;
        max: number;
    } | null;
    /** 便捷开关：启用变速打字（较新的 react-bits API）。默认 false。 */
    variableSpeedEnabled?: boolean;
    /** 变速打字的速度下限（毫秒）。 */
    variableSpeedMin?: number;
    /** 变速打字的速度上限（毫秒）。 */
    variableSpeedMax?: number;
    /** 仅当滚动进入视口时才开始动画。默认 false。 */
    startOnVisible?: boolean;
    /** 是否按反转后的字符串打字。默认 false。 */
    reverseMode?: boolean;
}
