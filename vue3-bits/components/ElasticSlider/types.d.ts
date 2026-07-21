/**
 * Public prop contract for <ElasticSlider>.
 *
 * A Vue3 port of the react-bits `ElasticSlider`. The original depends on
 * `motion/react` (useMotionValue / animate), `@chakra-ui/react` (Icon) and
 * `react-icons` (RiVolumeDownFill / RiVolumeUpFill). This port removes all
 * three dependencies:
 *   - animation → bundled `gsap` (scale / overflow spring / icon pulse)
 *   - icons     → inline SVG (default volume-down / volume-up slots; override
 *                 via the `leftIcon` / `rightIcon` slots)
 *   - interaction → native pointer events + Vue refs
 */
export interface ElasticSliderProps {
    /** Initial / controlled value the slider snaps to on mount. */
    defaultValue?: number;
    /** Minimum value (left end of the track). */
    startingValue?: number;
    /** Maximum value (right end of the track). */
    maxValue?: number;
    /** Extra CSS class for the outer container. */
    className?: string;
    /** Snap to multiples of `stepSize` while dragging. */
    isStepped?: boolean;
    /** Step size used when `isStepped` is true. */
    stepSize?: number;
}
export declare const DEFAULT_ELASTIC_SLIDER_PROPS: {
    defaultValue: number;
    startingValue: number;
    maxValue: number;
    className: string;
    isStepped: boolean;
    stepSize: number;
};
