import { CSSProperties } from 'vue';
/**
 * Row/column gap for the cube grid.
 *
 * Consumed by the `cellGap` prop. A single number applies the same gap to
 * both axes; this object form lets each axis be tuned independently (in px).
 */
export interface Gap {
    /** Vertical gap between rows (px). */
    row: number;
    /** Horizontal gap between columns (px). */
    col: number;
}
/**
 * Enter / leave animation durations for the tilt, in seconds.
 *
 * `enter` is the tween time when a cube moves into the influence `radius`;
 * `leave` is the time it takes to settle back to flat once outside it.
 */
export interface Duration {
    /** Tilt-in duration (seconds). */
    enter: number;
    /** Tilt-out / reset duration (seconds). */
    leave: number;
}
/**
 * Public prop contract for <Cubes>.
 *
 * A faithful Vue 3 port of the react-bits `Cubes` (#65): a
 * `gridSize × gridSize` field of 6-face CSS 3D cubes that tilt toward the
 * pointer (or an idle auto-animation path) via `gsap`, and ripple on click.
 * All visuals are plain CSS 3D transforms animated by the bundled `gsap` —
 * zero new runtime dependencies.
 *
 * React → Vue mapping:
 *  - `useRef` → `ref<HTMLElement | null>`; non-template mutable state
 *    (`userActive`, `simPos`, `simTarget`, rAF / timer handles) are plain
 *    `let` bindings (no reactivity needed).
 *  - `useEffect` (mount + listener setup) → `onMounted` / `onUnmounted`.
 *  - `useCallback` handlers → plain functions.
 *  - the sim-loop `useEffect` (deps `autoAnimate`, `gridSize`, `tiltAt`) →
 *    `onMounted` + a `watch(autoAnimate)` that starts / stops the loop.
 *  - `duration` default object → `withDefaults` factory (`() => ({...})`).
 *  - `style` / `className` are appended to the root for library consistency
 *    (the source react-bits component exposes neither, but every vue3-bits
 *    component does, so they are added here).
 */
export interface CubesProps {
    /** Number of cubes per row/column — the grid is `gridSize × gridSize`. */
    gridSize?: number;
    /**
     * Fixed cube size in px. When omitted (default) the grid stretches to fill
     * its container (`1fr` tracks); when set, both root and tracks become fixed.
     */
    cubeSize?: number;
    /** Maximum tilt angle (degrees) applied at the centre of the influence. */
    maxAngle?: number;
    /**
     * Influence radius (in grid cells) of the pointer / sim. Cubes within this
     * distance tilt; the further out, the smaller the angle.
     */
    radius?: number;
    /** gsap ease string for the tilt-in tween (e.g. `'power3.out'`). */
    easing?: string;
    /** Enter / leave tilt durations (seconds). */
    duration?: Duration;
    /** Gap between cells: a single number (both axes) or a `{row,col}` object (px). */
    cellGap?: number | Gap;
    /** CSS `border` value applied to every cube face. */
    borderStyle?: string;
    /** Background color of every cube face. */
    faceColor?: string;
    /** Box-shadow on each cube: `false` (none), `true` (default shadow) or a CSS string. */
    shadow?: boolean | string;
    /** Run the idle auto-animation path when the pointer is inactive. */
    autoAnimate?: boolean;
    /** Fire an expanding color ripple from the clicked cell. */
    rippleOnClick?: boolean;
    /** Color of the click ripple. */
    rippleColor?: string;
    /** Ripple speed multiplier (higher = faster spread). */
    rippleSpeed?: number;
    /** Extra CSS class appended to the root element. */
    className?: string;
    /** Inline style object merged onto the root element. */
    style?: CSSProperties;
}
