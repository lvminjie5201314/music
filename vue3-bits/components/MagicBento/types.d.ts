/**
 * Public prop contract for <MagicBento>.
 *
 * A Vue3 port of the react-bits `MagicBento`. The original drives its
 * tilt / magnetism / particle / ripple animations with `gsap`; this port keeps
 * `gsap` as a bundled runtime dependency (no `framer-motion`), and the CSS is a
 * 1:1 port of the react-bits `MagicBento.css`.
 */
export interface BentoCardProps {
    /** Card background color. */
    color?: string;
    /** Card title. */
    title?: string;
    /** Card description. */
    description?: string;
    /** Small label shown in the card header. */
    label?: string;
    /** Hide the title/description until hover. */
    textAutoHide?: boolean;
    /** Disable this card's entrance/particle animations. */
    disableAnimations?: boolean;
}
export interface BentoProps {
    /** Card data. Falls back to a built-in demo set when omitted. */
    items?: BentoCardProps[];
    /** Hide each card's title/description until hover. */
    textAutoHide?: boolean;
    /** Render the floating star particles. */
    enableStars?: boolean;
    /** Render the section-following spotlight. */
    enableSpotlight?: boolean;
    /** Render the glowing border on each card. */
    enableBorderGlow?: boolean;
    /** Disable all animations (also forced on when the viewport is mobile). */
    disableAnimations?: boolean;
    /** Spotlight radius (px). */
    spotlightRadius?: number;
    /** Number of particles spawned per card on hover. */
    particleCount?: number;
    /** Enable the 3D tilt on pointer move. */
    enableTilt?: boolean;
    /** Glow color as an `'r, g, b'` triplet, e.g. `'132, 0, 255'`. */
    glowColor?: string;
    /** Spawn a ripple on click. */
    clickEffect?: boolean;
    /** Enable the magnetic pull toward the pointer. */
    enableMagnetism?: boolean;
}
