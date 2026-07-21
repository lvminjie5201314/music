/**
 * Public prop contract for <DotField>.
 *
 * A faithful Vue3 / TypeScript port of the react-bits `DotField` Canvas2D
 * background. Every prop is optional and defaults to the react-bits values
 * (applied in the SFC via `withDefaults`). The drawing logic is a 1:1 port of
 * the react-bits canvas loop, so the prop API stays byte-for-byte equivalent.
 */
/** Public props for <DotField>. All optional. */
export interface DotFieldProps {
    /** Radius of each dot in px. */
    dotRadius?: number;
    /** Spacing between dots in px. */
    dotSpacing?: number;
    /** Radius (px) of the cursor influence field. */
    cursorRadius?: number;
    /** How strongly the cursor pushes dots when not in bulge-only mode. */
    cursorForce?: number;
    /** When true dots only bulge toward the cursor; otherwise they drift. */
    bulgeOnly?: boolean;
    /** Strength of the bulge displacement. */
    bulgeStrength?: number;
    /** Radius of the soft SVG glow that follows the pointer. */
    glowRadius?: number;
    /** Randomly enlarge a few dots each frame for a sparkle effect. */
    sparkle?: boolean;
    /** Amplitude of the idle sine-wave drift (0 = none). */
    waveAmplitude?: number;
    /** Gradient start color for the dot field. */
    gradientFrom?: string;
    /** Gradient end color for the dot field. */
    gradientTo?: string;
    /** Color of the radial cursor glow. */
    glowColor?: string;
    /** Extra CSS class applied to the container element. */
    className?: string;
}
/** Single source of truth for every <DotField> default. */
export declare const DEFAULT_DOT_FIELD_PROPS: {
    readonly dotRadius: 1.5;
    readonly dotSpacing: 14;
    readonly cursorRadius: 500;
    readonly cursorForce: 0.1;
    readonly bulgeOnly: true;
    readonly bulgeStrength: 67;
    readonly glowRadius: 160;
    readonly sparkle: false;
    readonly waveAmplitude: 0;
    readonly gradientFrom: "rgba(168, 85, 247, 0.35)";
    readonly gradientTo: "rgba(180, 151, 207, 0.25)";
    readonly glowColor: "#120F17";
    readonly className: "";
};
