/**
 * Public prop contract for <BorderGlow>.
 *
 * A Vue3 port of the react-bits `BorderGlow` (a mesh-gradient border + outer
 * glow that intensifies as the pointer approaches the card edge). Children are
 * passed through the default slot.
 */
export interface BorderGlowProps {
    /** Extra CSS class appended to the root element. */
    className?: string;
    /** Distance (px) from edge at which the glow starts fading in. */
    edgeSensitivity?: number;
    /** Base HSL triplet for the inner glow ring, e.g. `'40 80 80'`. */
    glowColor?: string;
    /** Card background color. */
    backgroundColor?: string;
    /** Corner radius in px. */
    borderRadius?: number;
    /** Outer glow padding (px) — how far the glow spreads outside the card. */
    glowRadius?: number;
    /** Multiplier applied to every glow layer's opacity (0..1+). */
    glowIntensity?: number;
    /** Half-angle (deg) of the bright cone that follows the cursor. */
    coneSpread?: number;
    /** Run the idle sweep animation on mount. */
    animated?: boolean;
    /** Colors used to build the mesh-gradient border. */
    colors?: string[];
    /** Opacity of the inner mesh-gradient fill. */
    fillOpacity?: number;
}
