/**
 * colorUtils — small, dependency-free colour helpers for the demo playground.
 *
 * These helpers convert between the various colour string formats that the
 * react-bits components expect (hex, rgb(a), hsl, and the `H S L` / `r, g, b`
 * triplets used by BorderGlow / MagicBento) and the native `<input type="color">`
 * element (which only speaks `#rrggbb`). No external package is pulled in — the
 * demos deliberately use the browser's built-in colour picker.
 */
export interface Rgb {
    r: number;
    g: number;
    b: number;
}
/**
 * Parse a `#rgb` / `#rrggbb` hex string into an `{r,g,b}` object.
 * Returns `{r:255,g:255,b:255}` on any parse failure.
 */
export declare function hexToRgb(hex: string): Rgb;
/** Build a `#rrggbb` hex string from `r,g,b` components (clamped to 0..255). */
export declare function rgbToHex(r: number, g: number, b: number): string;
/** Convert a hex colour + alpha (0..1) to an `rgba(r, g, b, a)` string. */
export declare function hexToRgba(hex: string, alpha: number): string;
/** Convert a hex colour to an HSL triplet string `'H S L'` (no `%` signs). */
export declare function hexToHslTriplet(hex: string): string;
/** Convert a hex colour to an RGB triplet string `'r, g, b'`. */
export declare function hexToRgbTriplet(hex: string): string;
/**
 * Parse any of the supported colour notations into a normalised `#rrggbb` hex:
 *   - `'#rgb'` / `'#rrggbb'`
 *   - `'rgb(r, g, b)'` / `'rgba(r, g, b, a)'`
 *   - `'hsl(h, s%, l%)'`
 *   - the `H S L` triplet used by BorderGlow
 *   - the `r, g, b` triplet used by MagicBento
 * Falls back to `'#ffffff'` on unrecognised input.
 */
export declare function anyColorToHex(input: string): string;
