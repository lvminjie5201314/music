import { CSSProperties } from 'vue';
/**
 * Public prop contract for `<ImageTrail>`.
 *
 * A faithful Vue 3 port of the react-bits `ImageTrail` (#68): a stack of
 * absolutely-positioned image tiles that follow the pointer, each one spawning
 * at the cursor and animating out whenever the pointer travels more than the
 * movement `threshold` (80px in the source, not exposed as a prop). Eight
 * distinct animation `variant`s are available, all driven by the bundled
 * `gsap` — zero new runtime dependencies.
 *
 * React → Vue mapping:
 *  - `items`/`variant` props mirror the react-bits source 1:1 (`items` default
 *    `[]`, `variant` default `1`).
 *  - the imperative `useEffect` (variant class instantiation) → `onMounted` +
 *    a `watch([variant, items], { flush: 'post' })` that rebuilds the active
 *    variant instance (the DOM must be updated first so the new `.content__img`
 *    tiles are re-queried).
 *  - `className` / `style` are added to follow the vue3-bits library convention
 *    (consistent with the other components); the source react-bits component
 *    exposes neither, so they are appended/merged onto the root element.
 *
 * Note: the react-bits source hard-codes the 80px `threshold` and the per-variant
 * maths inside each `ImageTrailVariantN` class. We keep those exact numbers
 * (lerp factor, durations, eases, filter formulae, …) so the port matches the
 * official effect pixel-for-pixel.
 */
export interface ImageTrailProps {
    /** Image URL list; each tile follows the pointer in order and loops around. */
    items?: string[];
    /** Animation variant (1–8). Selects one of the eight `ImageTrailVariantN` engines. */
    variant?: number;
    /** Extra CSS class appended to the root element. */
    className?: string;
    /** Inline styles merged onto the root element. */
    style?: CSSProperties;
}
/** Default `variant` value, matching the react-bits source (`variant = 1`). */
export declare const IMAGE_TRAIL_DEFAULT_VARIANT = 1;
/** Default `items` value, matching the react-bits source (`items = []`). */
export declare const IMAGE_TRAIL_DEFAULT_ITEMS: string[];
