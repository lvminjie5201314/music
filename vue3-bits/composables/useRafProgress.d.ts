import { Ref, MaybeRefOrGetter } from 'vue';
/**
 * Shared rAF-driven progress engine for the text-animation components.
 *
 * A faithful Vue port of the react-bits `motion/react` `useMotionValue` +
 * `useAnimationFrame` + `useTransform` trio, rewritten with a single
 * `requestAnimationFrame` loop and no external animation library. It turns
 * `speed / delay / yoyo / loop / direction` into a `0..100` "forward" progress
 * value (`progress`), exposing `isPaused` plus `start()` / `stop()` controls.
 *
 * Direction handling: for `ShinyText` the `direction` is `'left' | 'right'` and
 * the symbol flip (`right` => `100 - p`) is folded into `progress` so the SFC
 * can use it directly. For `GradientText` `direction` is
 * `'horizontal' | 'vertical' | 'diagonal'` and is returned as-is — the SFC maps
 * it to a `background-position`. `loop` (non-yoyo) intentionally lets progress
 * grow unbounded so the repeating gradient scrolls seamlessly.
 *
 * @param options  Animation options. Each field accepts a plain value or a
 *                 getter/ref (`MaybeRefOrGetter`) so the SFC can pass reactive
 *                 props; any change restarts the phase from `0`.
 * @returns        `{ progress, isPaused, start, stop }`.
 */
export type RafDirection = 'left' | 'right' | 'horizontal' | 'vertical' | 'diagonal';
export interface RafProgressOptions {
    /** Animation duration in **seconds** (react-bits `speed * 1000ms`). */
    speed: MaybeRefOrGetter<number>;
    /** Hold time at the endpoints in **seconds**. ShinyText uses it; GradientText passes 0. */
    delay?: MaybeRefOrGetter<number>;
    /** `true` = ping-pong 0→100→0 (with end delays); `false` = single pass + hold (or loop). */
    yoyo: MaybeRefOrGetter<boolean>;
    /** Non-yoyo: `true` = seamless continuous increase; `false` = single pass + hold. */
    loop?: MaybeRefOrGetter<boolean>;
    /** `'left'|'right'` are symbol-flipped; `'horizontal'|'vertical'|'diagonal'` pass through. */
    direction?: MaybeRefOrGetter<RafDirection>;
}
export interface RafProgress {
    /** Effective progress (0..100, direction flip already applied). */
    progress: Ref<number>;
    /** Set `true` by the SFC on hover to pause the loop without tearing it down. */
    isPaused: Ref<boolean>;
    /** Begin the rAF loop (idempotent). */
    start(): void;
    /** Cancel the rAF loop (idempotent). */
    stop(): void;
}
export declare function useRafProgress(options: RafProgressOptions): RafProgress;
