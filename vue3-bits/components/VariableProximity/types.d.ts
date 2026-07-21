import { CSSProperties, Ref } from 'vue';
/**
 * Falloff curve used to map the pointer→letter distance to an interpolation
 * factor in `[0, 1]` (1 = at the pointer, 0 = at/beyond `radius`).
 *
 * - `linear`:      `1 - d / radius`
 * - `exponential`: `(1 - d / radius) ** 2`
 * - `gaussian`:    `exp(-(d / (radius / 2)) ** 2 / 2)`
 */
export type VariableProximityFalloff = 'linear' | 'exponential' | 'gaussian';
/**
 * Props for the {@link VariableProximity} component (Vue 3 port of react-bits
 * #54 `VariableProximity`).
 *
 * The API is kept 1:1 with the react-bits component: the only required inputs
 * are `label`, the two `fontVariationSettings` strings and `containerRef`
 * (a Vue `ref` to the outer element used as the coordinate basis — equivalent
 * to react-bits' `RefObject<HTMLElement>`).
 */
export interface VariableProximityProps {
    /** Text to render as proximity-reactive variable-font characters. */
    label: string;
    /**
     * `font-variation-settings` applied at rest, e.g. `"'wght' 400, 'opsz' 9"`.
     * Also used as the value for letters outside `radius`.
     */
    fromFontVariationSettings: string;
    /**
     * `font-variation-settings` applied at the pointer, e.g.
     * `"'wght' 1000, 'opsz' 40"`.
     */
    toFontVariationSettings: string;
    /**
     * Vue `ref` to the outer container element. Pointer coordinates are computed
     * relative to this element's bounding rect (mirrors react-bits'
     * `RefObject<HTMLElement>`).
     */
    containerRef: Ref<HTMLElement | null>;
    /** Pointer influence radius in px (letters beyond it keep `from`). */
    radius?: number;
    /** Distance → intensity curve. */
    falloff?: VariableProximityFalloff;
    /** Extra CSS class appended to the root `<span>`. */
    className?: string;
    /** Click handler forwarded to the root `<span>`. */
    onClick?: () => void;
    /** Inline style merged onto the root `<span>` (over `display: inline`). */
    style?: CSSProperties;
}
