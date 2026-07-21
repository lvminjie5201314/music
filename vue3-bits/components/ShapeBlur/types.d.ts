import { CSSProperties } from 'vue';
/**
 * Public prop contract for <ShapeBlur>.
 *
 * A faithful Vue 3 port of the react-bits `ShapeBlur` (#66): a full-screen
 * quad rendered with a `THREE.ShaderMaterial`. The fragment shader (copied
 * verbatim from `react-bits.md` §28145–28258) draws one of four shape variants
 * (rounded-rect outline / filled circle / circle outline / filled triangle) and
 * masks its edge with a soft circle driven by the (damped) pointer, producing a
 * "shape blur" that follows the cursor. Rendered with the bundled `three`
 * (a peer dependency) — zero new runtime dependencies.
 *
 * React → Vue / three.js mapping:
 *  - `useRef(mountRef)`                       → `ref<HTMLDivElement | null>`
 *  - `useEffect(() => { …; return cleanup }, [deps])`
 *    → `onMounted` bootstrap + `onUnmounted` cleanup (renderer dispose,
 *    listeners off, ResizeObserver disconnect, rAF cancel). The compile-time
 *    `#define VAR` (variation) is recompiled via a `watch(() => props.variation)`
 *    that rewrites `material.defines` and sets `material.needsUpdate = true`; the
 *    remaining numeric props are pushed into their matching uniforms every frame
 *    so live edits take effect without a rebuild (mirrors MagicRings).
 *  - `useCallback` / inline handlers          → plain functions.
 */
export interface ShapeBlurProps {
    /** Extra CSS class appended to the root element. */
    className?: string;
    /**
     * Which shape variant the shader draws:
     *  - `0` → rounded rectangle outline (stroke)
     *  - `1` → filled circle
     *  - `2` → circle outline (stroke)
     *  - `3` → filled triangle (polygon)
     */
    variation?: number;
    /**
     * Pixel-ratio hint handed to the shader. On `resize` it is overridden by
     * `min(window.devicePixelRatio, 2)`, so this mainly seeds the initial value.
     */
    pixelRatioProp?: number;
    /** Size of the base shape (rectangle half-extent / circle radius scale). */
    shapeSize?: number;
    /** Corner roundness of the rectangle (only affects `variation = 0`). */
    roundness?: number;
    /** Stroke width of the shape outline. */
    borderSize?: number;
    /** Radius of the mask circle that defines the blurred edge. */
    circleSize?: number;
    /** Softness (anti-aliased width) of the mask circle edge. */
    circleEdge?: number;
    /** Inline style object merged onto the root element. */
    style?: CSSProperties;
}
/** Authoritative default prop values, copied 1:1 from the react-bits source. */
export declare const DEFAULT_SHAPE_BLUR_PROPS: {
    readonly className: "";
    readonly variation: 0;
    readonly pixelRatioProp: 2;
    readonly shapeSize: 1.2;
    readonly roundness: 0.4;
    readonly borderSize: 0.05;
    readonly circleSize: 0.3;
    readonly circleEdge: 0.5;
};
