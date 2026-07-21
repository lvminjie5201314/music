/**
 * Public prop contract for <PixelCard>.
 *
 * A Vue3 port of the react-bits `PixelCard`: a card whose border fills with a
 * pixelated, shimmering animation on hover/focus, drawn on a Canvas 2D layer.
 * The `getContext('2d')` call is null-guarded so the component mounts cleanly
 * in non-browser environments (jsdom / SSR).
 */
/** Built-in colour variants. */
export type PixelCardVariant = 'default' | 'blue' | 'yellow' | 'pink';
/** Props accepted by <PixelCard>. Children are supplied via the default slot. */
export interface PixelCardProps {
    variant?: PixelCardVariant;
    /** Pixel grid gap (px). */
    gap?: number;
    /** Animation speed (0–100). */
    speed?: number;
    /** Comma-separated pixel colours, e.g. `'#fff,#999,#333'`. */
    colors?: string;
    /** Disable focus-driven animation (only hover). */
    noFocus?: boolean;
    /** Extra CSS class appended to the card root. */
    className?: string;
}
/** Per-variant defaults. */
export interface VariantConfig {
    activeColor: string | null;
    gap: number;
    speed: number;
    colors: string;
    noFocus: boolean;
}
/** Built-in variant presets (mirrors the react-bits component). */
export declare const PIXEL_CARD_VARIANTS: Record<PixelCardVariant, VariantConfig>;
