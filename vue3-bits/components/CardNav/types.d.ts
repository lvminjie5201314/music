/**
 * Public prop contract for <CardNav>.
 *
 * A Vue3 port of the react-bits `CardNav`: a hamburger-triggered expanding nav
 * bar whose cards animate in with a gsap timeline. The original used
 * `react-icons` for the link arrow; this port inlines a small SVG so no extra
 * dependency is introduced.
 */
/** A single link inside a nav card. */
export interface CardNavLink {
    label: string;
    href: string;
    ariaLabel: string;
}
/** A column/card in the nav. */
export interface CardNavItem {
    label: string;
    bgColor: string;
    textColor: string;
    links: CardNavLink[];
}
/** Props accepted by <CardNav>. */
export interface CardNavProps {
    /** Logo image URL. */
    logo: string;
    /** Alt text for the logo. */
    logoAlt?: string;
    /** Nav cards (only the first three are rendered). */
    items: CardNavItem[];
    /** Extra CSS class appended to the outer container. */
    className?: string;
    /** gsap easing function name. */
    ease?: string;
    /** Bar background colour. */
    baseColor?: string;
    /** Hamburger (menu) icon colour. */
    menuColor?: string;
    /** "Get Started" button background colour. */
    buttonBgColor?: string;
    /** "Get Started" button text colour. */
    buttonTextColor?: string;
}
