import { CSSProperties, Ref } from 'vue';
/**
 * Public prop contract for <Crosshair>.
 *
 * A faithful Vue 3 port of the react-bits `Crosshair` (#67): a full-bleed
 * overlay (a horizontal + a vertical hairline) that follows the pointer with a
 * lerp-smoothed follow, fades out when the pointer leaves its bound container,
 * and — on `mouseenter` of any `<a>` inside the container — runs a `gsap`
 * turbulence timeline that warps the two hairlines with an SVG `feDisplacementMap`
 * noise filter (then snaps back on `mouseleave`).
 *
 * React → Vue mapping:
 *  - `RefObject<HTMLElement>` (`containerRef`) → `Ref<HTMLElement | null>`.
 *  - `useState` (`mouse`) → a plain `let` object (no reactivity needed; it is
 *    only read inside the rAF render loop).
 *  - `useEffect(setup, [containerRef])` → `onMounted` (setup) + the teardown is
 *    run from `onUnmounted` (Vue has no effect-return cleanup, so the cleanup
 *    collected inside `onMounted` is invoked explicitly on unmount).
 *  - `useRef` → `ref<...>()` template refs.
 *  - `useCallback` handlers → plain functions.
 *  - the per-frame `render` loop is driven by `requestAnimationFrame` and is
 *    cancelled on unmount (the source never cancels it, which leaks frames
 *    after unmount; we add a cancellation flag that preserves the visible
 *    behavior while avoiding the leak).
 *
 * `style` / `className` are appended to the root for library consistency (the
 * source react-bits component exposes neither, but every vue3-bits component
 * does, so they are added here — mirroring the `Cubes` component).
 */
export interface CrosshairProps {
    /** Color of the two hairlines. Defaults to `'white'`. */
    color?: string;
    /**
     * Ref to the scroll / overflow container the crosshair is bound to.
     *
     * When provided, the overlay is `position: absolute` inside that container
     * and the hairlines fade out whenever the pointer leaves its bounds. When
     * omitted (default `null`), the overlay is `position: fixed` and tracks the
     * whole window.
     */
    containerRef?: Ref<HTMLElement | null>;
    /** Extra CSS class appended to the root element. */
    className?: string;
    /** Inline style object merged onto the root element. */
    style?: CSSProperties;
}
