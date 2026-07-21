/**
 * Public prop contract for <GradientText>.
 *
 * A Vue3 port of the react-bits `GradientText` flowing multi-color text. The
 * text content is provided via the **default slot** (react-bits `children`),
 * so it is intentionally absent from this interface. Animation progress is
 * driven by `useRafProgress`.
 */
export interface GradientTextProps {
    /** Extra CSS class appended to the root element. */
    className?: string;
    /** Gradient color stops. The first color is duplicated at the end for a seamless loop. */
    colors?: string[];
    /** Animation duration in seconds. */
    animationSpeed?: number;
    /** Render a gradient border overlay around the text. */
    showBorder?: boolean;
    /** Flow direction of the gradient. */
    direction?: 'horizontal' | 'vertical' | 'diagonal';
    /** Pause the flow while hovered. */
    pauseOnHover?: boolean;
    /** Ping-pong 0→100→0 (2 phases). When `false`, the gradient scrolls seamlessly. */
    yoyo?: boolean;
}
