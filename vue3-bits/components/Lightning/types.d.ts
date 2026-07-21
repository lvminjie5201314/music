/**
 * Public prop contract for <Lightning>.
 *
 * A 1:1 Vue3 / TypeScript port of the react-bits `Lightning` background. Every
 * prop is optional and defaults to the react-bits values. The render engine
 * (`lightningEngine.ts`) is a raw WebGL1 port with the verbatim GLSL.
 */
/** Public props for <Lightning>. All optional. */
export interface LightningProps {
    /** Base color hue of the beam, in degrees (0–360). */
    hue?: number;
    /** Horizontal offset applied to the beam field. */
    xOffset?: number;
    /** Animation speed multiplier. */
    speed?: number;
    /** Brightness / glow intensity of the beam. */
    intensity?: number;
    /** Noise distortion size of the beam field. */
    size?: number;
    /** Extra CSS class applied to the container element. */
    className?: string;
}
/** Single source of truth for every <Lightning> default. */
export declare const DEFAULT_LIGHTNING_PROPS: {
    readonly hue: 230;
    readonly xOffset: 0;
    readonly speed: 1;
    readonly intensity: 1;
    readonly size: 1;
    readonly className: "";
};
