import { CSSProperties } from 'vue';
export interface ElectricBorderProps {
    /** Border / glow color. Also exposed as the `--electric-border-color` CSS var consumed by the glow layers. */
    color?: string;
    /** Animation speed multiplier — higher = faster wobble. */
    speed?: number;
    /** Noise displacement amount: how jagged / fuzzy the electric edge looks (≈ 0–0.5). */
    chaos?: number;
    /** Corner radius of the rounded-rectangle border, in px. */
    borderRadius?: number;
    /** Extra CSS class appended to the root wrapper element. */
    className?: string;
    /** Inline style merged onto the root wrapper (react-bits `style` prop). */
    style?: CSSProperties;
}
/**
 * Content is supplied through the **default slot** (react-bits `children`).
 * It is rendered inside `.eb-content`, above the canvas + glow layers.
 */
export type ElectricBorderSlot = unknown;
