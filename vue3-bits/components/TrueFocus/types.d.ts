/**
 * Public prop contract for <TrueFocus>.
 *
 * A Vue 3 port of the react-bits `TrueFocus` text focus effect. A sentence is
 * split into words (by `separator`); the active word is rendered sharp while
 * the others are blurred via a CSS `filter: blur()`. In auto mode the active
 * word advances on a timer; in manual mode it follows the pointer. The prop
 * names, types and defaults are ported 1:1 from the react-bits source.
 */
export interface TrueFocusProps {
    /** The full sentence to display. Split into words by `separator`. */
    sentence?: string;
    /** Delimiter used to split `sentence` into words. */
    separator?: string;
    /** When `true`, the active word follows the pointer instead of auto-cycling. */
    manualMode?: boolean;
    /** Blur radius (px) applied to inactive words. */
    blurAmount?: number;
    /** Color of the focus-frame corners. Any CSS color (e.g. `green`). */
    borderColor?: string;
    /** Glow color of the focus-frame corners. Any CSS color (e.g. `rgba(0, 255, 0, 0.6)`). */
    glowColor?: string;
    /** Duration (s) of the blur/frame transitions and each auto-cycle step. */
    animationDuration?: number;
    /** Idle time (s) inserted between auto-cycle steps (added to `animationDuration`). */
    pauseBetweenAnimations?: number;
    /** Extra CSS class appended to the root element. */
    className?: string;
}
