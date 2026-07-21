/**
 * Public prop contract for <TargetCursor>.
 *
 * A faithful Vue 3 port of the react-bits `TargetCursor` (#61). A `position:
 * fixed` cursor overlay (corner brackets + center dot) follows the pointer with
 * a gsap `power3.out` tween, continuously spins its corner brackets, and — when
 * the pointer hovers an element matching `targetSelector` — tints to
 * `cursorColorOnTarget` and adds a per-corner parallax that wraps the target.
 *
 * The component is rendered by `App.vue` once (it is a global overlay), so it
 * intentionally has no slot / no content props.
 */
export interface TargetCursorProps {
    /**
     * CSS selector for the elements the cursor should react to ("targets").
     * When the pointer hovers a matching element the cursor tints to
     * `cursorColorOnTarget` and the corner brackets wrap the target. Defaults to
     * `'.cursor-target'`.
     */
    targetSelector?: string;
    /** Full rotation duration (seconds) of the spinning corner brackets. */
    spinDuration?: number;
    /**
     * If `true` (default), the native cursor is hidden (`document.body.style.cursor
     * = 'none'`) while the component is mounted and restored on unmount.
     */
    hideDefaultCursor?: boolean;
    /** Duration (seconds) of the color / parallax ease when entering a target. */
    hoverDuration?: number;
    /**
     * If `true` (default), the corner brackets ease toward the target edges with a
     * `0.2s` parallax; when `false` they snap immediately (`0s`).
     */
    parallaxOn?: boolean;
    /** Resting color of the dot and corner brackets. Defaults to `'#ffffff'`. */
    cursorColor?: string;
    /**
     * Color applied to the dot and corner brackets while hovering a target. When
     * omitted (default) the cursor keeps `cursorColor` on hover.
     */
    cursorColorOnTarget?: string;
}
