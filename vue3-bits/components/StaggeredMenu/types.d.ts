/**
 * Public prop contract for <StaggeredMenu>.
 *
 * A Vue 3 port of the react-bits `StaggeredMenu` (#76). The original is driven
 * by GSAP timelines (panel slide, pre-layer stagger, item-label reveal). In
 * this port every animation is reproduced with pure CSS transitions whose
 * `transition-delay` is staggered per item index (see `StaggeredMenu.vue`), so
 * there is **no GSAP / framer-motion** dependency.
 *
 * `onMenuOpen` / `onMenuClose` are kept for API parity with react-bits; the
 * component ALSO emits the idiomatic Vue `menuOpen` / `menuClose` events.
 */
export interface StaggeredMenuItem {
    /** Visible label text. */
    label: string;
    /** Accessible label for the link. */
    ariaLabel: string;
    /** Destination URL. */
    link: string;
}
export interface StaggeredMenuSocialItem {
    /** Visible label text. */
    label: string;
    /** Destination URL. */
    link: string;
}
export interface StaggeredMenuProps {
    /** Which edge the panel slides in from. */
    position?: 'left' | 'right';
    /** Background colors of the stacked reveal layers (first up to 4 used). */
    colors?: string[];
    /** Primary navigation entries. */
    items?: StaggeredMenuItem[];
    /** Social links rendered at the bottom of the panel. */
    socialItems?: StaggeredMenuSocialItem[];
    /** Render the socials block. */
    displaySocials?: boolean;
    /** Show the leading 01 / 02 … numbering on each item. */
    displayItemNumbering?: boolean;
    /** Extra CSS class appended to the root element. */
    className?: string;
    /**
     * Logo image URL. When omitted an inline SVG wordmark is rendered instead so
     * the demo stays fully offline (no external network images).
     */
    logoUrl?: string;
    /** Toggle button color while the menu is closed. */
    menuButtonColor?: string;
    /** Toggle button color while the menu is open (when `changeMenuColorOnOpen`). */
    openMenuButtonColor?: string;
    /** Accent color used for item hover, numbering and socials. */
    accentColor?: string;
    /** Tint the toggle button with `openMenuButtonColor` while open. */
    changeMenuColorOnOpen?: boolean;
    /** Close the menu when a mousedown happens outside it. */
    closeOnClickAway?: boolean;
    /** Fixed-position wrapper (fills the viewport). */
    isFixed?: boolean;
    /** Callback fired when the menu opens. */
    onMenuOpen?: () => void;
    /** Callback fired when the menu closes. */
    onMenuClose?: () => void;
}
