/**
 * Public prop contract for <PillNav>.
 *
 * A Vue3 port of the react-bits `PillNav`. The original imports `gsap` (kept)
 * and `react-router-dom`'s `Link` (removed — vue3-bits has no router
 * dependency). Every `Link` becomes a plain `<a>`; external links (http(s), //,
 * mailto:, tel:, #) open in a new tab. All hover / load / mobile-menu animations
 * are driven by the bundled `gsap` exactly as in the original.
 */
export interface PillNavItem {
    /** Visible label / aria-label of the pill. */
    label: string;
    /** Destination href. */
    href: string;
    /** Optional explicit aria-label. */
    ariaLabel?: string;
}
export interface PillNavProps {
    /** Logo image URL. */
    logo: string;
    /** Logo alt text. */
    logoAlt?: string;
    /** Nav items. */
    items: PillNavItem[];
    /** Href of the currently active item. */
    activeHref?: string;
    /** Extra CSS class for the `<nav>`. */
    className?: string;
    /** gsap easing string used for every tween. */
    ease?: string;
    /** Base color (also the hover-circle / pill text fallback). */
    baseColor?: string;
    /** Pill background color. */
    pillColor?: string;
    /** Text color of the hover (white) label. */
    hoveredPillTextColor?: string;
    /** Default pill text color (falls back to `baseColor`). */
    pillTextColor?: string;
    /** Called when the mobile hamburger is toggled. */
    onMobileMenuClick?: () => void;
    /** Run the logo / nav-items grow-in animation on mount. */
    initialLoadAnimation?: boolean;
}
export declare const DEFAULT_PILL_NAV_PROPS: {
    logo: string;
    logoAlt: string;
    items: PillNavItem[];
    activeHref: string;
    className: string;
    ease: string;
    baseColor: string;
    pillColor: string;
    hoveredPillTextColor: string;
    initialLoadAnimation: boolean;
};
