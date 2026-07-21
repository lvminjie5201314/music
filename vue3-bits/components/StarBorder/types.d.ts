/**
 * Public prop contract for <StarBorder>.
 *
 * A Vue3 port of the react-bits `StarBorder` starry button border. Two
 * color-driven radial-gradient "star" layers slide behind a dark inner button to
 * produce an animated starry border. Content is supplied via the **default slot**
 * (react-bits `children`), so it is intentionally absent from this interface.
 * Every other native element attribute (onClick, href, type, ...) is left
 * undeclared and falls through to the root element automatically.
 */
export interface StarBorderProps {
    /** Root element tag to render as (e.g. 'button', 'a', 'div'). Defaults to 'button'. */
    as?: string;
    /** Extra CSS class appended to the root element. */
    className?: string;
    /** Star glow color — any valid CSS color (drives the radial-gradient). */
    color?: string;
    /** Animation duration as a CSS time string (e.g. '6s'). */
    speed?: string;
    /** Border thickness in px (vertical padding of the root element). */
    thickness?: number;
}
