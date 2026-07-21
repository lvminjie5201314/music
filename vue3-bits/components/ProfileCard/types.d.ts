/**
 * Public prop contract for <ProfileCard>.
 *
 * A Vue 3 port of the react-bits `ProfileCard` (#77): a hover-driven 3D tilt
 * profile card with a holo / glare sheen and a contact bar. The original uses a
 * custom `requestAnimationFrame` tilt engine (no framer-motion) plus remote
 * avatar / icon images — both are reproduced faithfully here: the tilt engine is
 * ported 1:1 to the Composition API, and every image prop (`avatarUrl`,
 * `iconUrl`, `grainUrl`, `miniAvatarUrl`) now accepts an inline `data:` URI so
 * the demo stays fully offline.
 */
export interface ProfileCardProps {
    /** Avatar image (any URL, but a `data:image/svg+xml,...` URI keeps it offline). */
    avatarUrl?: string;
    /** Decorative "icon pattern" used as a luminance mask over the holo sheen. */
    iconUrl?: string;
    /** Optional film-grain texture layered into the holo effect. */
    grainUrl?: string;
    /** CSS `background` applied to the card interior behind the avatar. */
    innerGradient?: string;
    /** Render the radial glow that sits behind the card. */
    behindGlowEnabled?: boolean;
    /** Color of the behind glow (any CSS color). */
    behindGlowColor?: string;
    /** Radius/extent of the behind glow (e.g. `50%`). */
    behindGlowSize?: string;
    /** Extra CSS class appended to the root wrapper. */
    className?: string;
    /** Enable the pointer-driven 3D tilt. */
    enableTilt?: boolean;
    /** On touch devices, request device-orientation permission to drive the tilt. */
    enableMobileTilt?: boolean;
    /** How strongly device tilt maps to pointer offset on mobile. */
    mobileTiltSensitivity?: number;
    /** Smaller avatar shown in the contact bar (falls back to `avatarUrl`). */
    miniAvatarUrl?: string;
    /** Display name. */
    name?: string;
    /** Subtitle / role. */
    title?: string;
    /** Social handle (rendered as `@handle`). */
    handle?: string;
    /** Status pill text (e.g. `Online`). */
    status?: string;
    /** Contact button label. */
    contactText?: string;
    /** Show the bottom contact bar with mini-avatar + handle + status. */
    showUserInfo?: boolean;
    /** Called when the contact button is clicked. */
    onContactClick?: () => void;
}
