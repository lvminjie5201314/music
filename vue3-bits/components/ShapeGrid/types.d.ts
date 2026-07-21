/**
 * Public prop contract for <ShapeGrid>.
 *
 * A faithful Vue3 / TypeScript port of the react-bits `ShapeGrid` Canvas2D
 * background. Every prop is optional and defaults to the react-bits values
 * (applied in the SFC via `withDefaults`). The grid (square / hexagon / circle /
 * triangle) scrolls in `direction` and fills hovered cells with `hoverFillColor`.
 */
/** Allowed scroll directions. */
export type ShapeGridDirection = 'diagonal' | 'up' | 'right' | 'down' | 'left';
/** Allowed cell shapes. */
export type ShapeGridShape = 'square' | 'hexagon' | 'circle' | 'triangle';
/** Public props for <ShapeGrid>. All optional. */
export interface ShapeGridProps {
    /** Scroll direction of the animated grid. */
    direction?: ShapeGridDirection;
    /** Scroll speed (minimum clamped to 0.1). */
    speed?: number;
    /** Stroke color of each cell (any CanvasStrokeStyle). */
    borderColor?: string;
    /** Size of each cell in px. */
    squareSize?: number;
    /** Fill color of hovered cells. */
    hoverFillColor?: string;
    /** Cell shape. */
    shape?: ShapeGridShape;
    /** Number of trailing hovered shapes to keep lit (0 = no trail). */
    hoverTrailAmount?: number;
    /** Extra CSS class applied to the canvas element. */
    className?: string;
}
/** Single source of truth for every <ShapeGrid> default. */
export declare const DEFAULT_SHAPE_GRID_PROPS: {
    readonly direction: "right";
    readonly speed: 1;
    readonly borderColor: "#999";
    readonly squareSize: 40;
    readonly hoverFillColor: "#222";
    readonly shape: "square";
    readonly hoverTrailAmount: 0;
    readonly className: "";
};
