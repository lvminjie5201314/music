/**
 * Public prop contract for <CursorGrid>.
 *
 * A faithful Vue 3 port of the react-bits `CursorGrid` canvas effect: a lattice
 * of cells that light up (stroke + optional fill, with a radial-gradient glow)
 * based on the pointer's distance, plus an optional expanding "click pulse".
 * All rendering is hand-drawn on a 2D `<canvas>` — no framer-motion / WebGL /
 * `ogl` / `three`, so there are zero new runtime dependencies.
 */
export type Falloff = 'linear' | 'smooth' | 'sharp';
export interface CursorGridProps {
    /** Grid cell size in px (distance between lattice lines). */
    cellSize?: number;
    /** Accent color of the lit cells (any CSS hex). */
    color?: string;
    /** Pointer influence radius in px. */
    radius?: number;
    /** Distance→brightness curve applied to cells inside `radius`. */
    falloff?: Falloff;
    /** How long (ms) a lit cell stays at full brightness before it starts fading. */
    holdTime?: number;
    /** Fade-out duration (ms) once `holdTime` has elapsed. */
    fadeDuration?: number;
    /** Stroke line width of each lit cell. */
    lineWidth?: number;
    /** Peak opacity of a fully lit cell. */
    maxOpacity?: number;
    /** Multiplier applied to the stroke opacity for the cell fill (0 = no fill). */
    fillOpacity?: number;
    /** Opacity of the static background lattice (0 = hidden). */
    gridOpacity?: number;
    /** Corner radius (px) of each cell rectangle (0 = sharp corners). */
    cellRadius?: number;
    /** Emit an expanding ring pulse on pointer down. */
    clickPulse?: boolean;
    /** Expansion speed (px/s) of click pulses. */
    pulseSpeed?: number;
    /** Extra CSS class appended to the root element. */
    className?: string;
}
