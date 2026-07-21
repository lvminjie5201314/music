/**
 * Public prop contract for <SpotlightCard>.
 *
 * A Vue3 port of the react-bits `SpotlightCard` (a mouse-following radial
 * spotlight rendered with a CSS `::before` layer). Children are passed through
 * the default slot — react-bits' `children` cannot be expressed as a prop in
 * Vue, so the slot is the equivalent surface.
 */
export interface SpotlightCardProps {
    /** Extra CSS class appended to the root element. */
    className?: string;
    /** Color of the spotlight radial gradient (any CSS color). */
    spotlightColor?: string;
}
