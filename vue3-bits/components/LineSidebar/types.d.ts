/**
 * Public prop contract for <LineSidebar>.
 *
 * A Vue3 port of the react-bits `LineSidebar` proximity-aware navigation. A
 * single rAF loop eases each item's `--effect` (0..1) toward a target derived
 * from the pointer distance, so color / shift / scale all move together.
 */
export type Falloff = 'linear' | 'smooth' | 'sharp';
export interface LineSidebarProps {
    /** Menu labels. */
    items?: string[];
    /** Accent color (active highlight / marker mix). */
    accentColor?: string;
    /** Inactive text color. */
    textColor?: string;
    /** Marker / tick color. */
    markerColor?: string;
    /** Show the leading index number. */
    showIndex?: boolean;
    /** Show the left marker line. */
    showMarker?: boolean;
    /** Pointer proximity radius (px). */
    proximityRadius?: number;
    /** Max horizontal shift (px) at full effect. */
    maxShift?: number;
    /** Distance→effect curve. */
    falloff?: Falloff;
    /** Marker line length (px). */
    markerLength?: number;
    /** Gap between marker and text (px). */
    markerGap?: number;
    /** In-between tick scale factor. */
    tickScale?: number;
    /** Grow in-between ticks with proximity. */
    scaleTick?: boolean;
    /** Vertical gap between items (px). */
    itemGap?: number;
    /** Font size (rem). */
    fontSize?: number;
    /** Easing time constant (ms). */
    smoothing?: number;
    /** Initially active item index, or `null` for none. */
    defaultActive?: number | null;
    /** Extra CSS class appended to the root `<nav>`. */
    className?: string;
}
