/**
 * Interaction & animation constants for ModelViewer.
 * All values mirror the react-bits reference implementation.
 */
/** Convert degrees to radians. */
export declare const deg2rad: (d: number) => number;
/** Touch single-finger vs pinch decision threshold, in pixels. */
export declare const DECIDE = 8;
/** Drag rotation sensitivity. */
export declare const ROTATE_SPEED = 0.005;
/** Inertia decay applied to velocity every frame (closer to 1 = longer glide). */
export declare const INERTIA = 0.925;
/** Mouse parallax magnitude. */
export declare const PARALLAX_MAG = 0.05;
/** Mouse parallax easing factor (per-frame approach toward target). */
export declare const PARALLAX_EASE = 0.12;
/** Hover rotation magnitude (radians). */
export declare const HOVER_MAG: number;
/** Hover rotation easing factor. */
export declare const HOVER_EASE = 0.15;
/** Clamp a value into [min, max]. */
export declare const clamp: (v: number, min: number, max: number) => number;
/** True when running on a touch-capable device. */
export declare const isTouch: boolean;
