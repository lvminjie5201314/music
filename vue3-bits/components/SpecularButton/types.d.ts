/**
 * Public prop contract for <SpecularButton>.
 *
 * A Vue 3 port of the react-bits `SpecularButton` (#74). The button label is
 * supplied through the **default slot** (react-bits `children`, fallback
 * "Get Started"), so it is intentionally absent from this interface. The click
 * handler is exposed the idiomatic Vue way — via the `click` event
 * (`@click="..."`) — rather than a React-style `onClick` prop.
 */
export interface SpecularButtonProps {
    /** Button size preset: controls font-size + padding. */
    size?: 'sm' | 'md' | 'lg';
    /** Corner radius in px. */
    radius?: number;
    /** Base tint color (mixed into the background via `color-mix`). */
    tint?: string;
    /** Tint opacity 0..1 (used as the `color-mix` percentage). */
    tintOpacity?: number;
    /** Backdrop blur in px. */
    blur?: number;
    /** Label / text color. */
    textColor?: string;
    /** Specular rim highlight color. */
    lineColor?: string;
    /** Dark base stroke color hugging the edge. */
    baseColor?: string;
    /** Overall shine intensity multiplier. */
    intensity?: number;
    /** Angular half-window of the shine (degrees). */
    shineSize?: number;
    /** Angular fade of the shine (degrees). */
    shineFade?: number;
    /** Specular line thickness (px). */
    thickness?: number;
    /** Idle sweep speed (rad/s) when the pointer isn't steering the light. */
    speed?: number;
    /** Steer the light angle toward the pointer (anywhere on the page). */
    followMouse?: boolean;
    /** Pointer proximity radius (px) over which the shine fades in. */
    proximity?: number;
    /** Keep the shine on without pointer proximity. */
    autoAnimate?: boolean;
    /** Disable the button (dims + blocks clicks). */
    disabled?: boolean;
    /** Extra CSS class appended to the root element. */
    className?: string;
    /** Native button `type` attribute. */
    type?: 'button' | 'submit' | 'reset';
}
