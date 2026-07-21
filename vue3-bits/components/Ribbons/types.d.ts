import { CSSProperties } from 'vue';
/**
 * Public prop contract for <Ribbons>.
 *
 * A faithful Vue 3 port of the react-bits `Ribbons` (#69). The original react
 * component is built on the `ogl` micro-library (`Renderer` / `Transform` /
 * `Vec3` / `Color` / `Polyline`). This port drops `ogl` and re-implements the
 * exact same behaviour with the project's already-bundled `three` — the
 * `Polyline` ribbon mesh is rebuilt as a `THREE.BufferGeometry` (per-vertex
 * `position` / `prev` / `next` / `uv` / `side` attributes + index buffer) and
 * the original GLSL vertex / fragment shaders are copied verbatim into a
 * `THREE.RawShaderMaterial`. The spring-follow + trailing-lerp physics is kept
 * 1:1 with the source.
 *
 * React → Vue / three.js mapping:
 *  - `useRef<HTMLDivElement>` → `ref<HTMLDivElement | null>` root;
 *  - `useEffect(mount + listeners, [props...])` → `onMounted` bootstrap +
 *    `onUnmounted` cleanup (dispose geometry / material / renderer, remove
 *    listeners, disconnect ResizeObserver, cancel rAF);
 *  - ogl `Vec3` → `THREE.Vector3` (`.lerp` / `.add` / `.sub` / `.multiply` /
 *    `.copy` semantics match exactly);
 *  - ogl `Polyline.updateGeometry()` → our `updatePolyline()` that rewrites the
 *    `position` / `prev` / `next` attribute buffers each frame;
 *  - props are read live inside the rAF loop, so structural props
 *    (`colors`, `pointCount`, `offsetFactor`) trigger a line rebuild while the
 *    rest update without a rebuild.
 *
 * three.js is a peer dependency already used by the repo's other 3D ports, so
 * this adds no new runtime dependency. `framer-motion` / `react-icons` /
 * `@react-three/fiber` are intentionally not used.
 */
export interface RibbonsProps {
    /** Per-ribbon colors (any CSS color string). One ribbon is spawned per entry. */
    colors?: string[];
    /** Spring stiffness — how hard each ribbon's head is pulled toward the pointer. */
    baseSpring?: number;
    /** Velocity damping; smaller = the head stops faster. A little jitter is added per ribbon. */
    baseFriction?: number;
    /** Base ribbon thickness in (CSS) pixels. A little jitter is added per ribbon. */
    baseThickness?: number;
    /** Horizontal offset spread between ribbons (NDC units). */
    offsetFactor?: number;
    /** Trail lifetime in ms — larger = longer tail. `0` / non-finite = instant follow. */
    maxAge?: number;
    /** Sample points per ribbon — more = smoother curve. */
    pointCount?: number;
    /** How quickly the trailing points chase the head (per-frame follow speed). */
    speedMultiplier?: number;
    /** Fade the ribbon out toward its tail (alpha → 0 at the last point). */
    enableFade?: boolean;
    /** Add a sine wave displacement to the ribbon in the vertex shader. */
    enableShaderEffect?: boolean;
    /** Amplitude of the shader wave displacement (only used when `enableShaderEffect`). */
    effectAmplitude?: number;
    /** Clear-color `[r, g, b, a]` in 0–1 floats. `[0,0,0,0]` = transparent. */
    backgroundColor?: [number, number, number, number];
    /** Extra CSS class appended to the root element. */
    className?: string;
    /** Inline style merged onto the root element. */
    style?: CSSProperties;
}
/**
 * Default prop values, mirrored 1:1 from the react-bits source.
 *
 * Exported so callers / the demo can reference the canonical defaults and the
 * `<Ribbons>` component itself can reuse them. Object / array defaults are
 * returned from factory functions to avoid shared references across instances.
 */
export declare const RIBBONS_DEFAULTS: {
    readonly colors: readonly ["#ff9346", "#7cff67", "#ffee51", "#5227FF"];
    readonly baseSpring: 0.03;
    readonly baseFriction: 0.9;
    readonly baseThickness: 30;
    readonly offsetFactor: 0.05;
    readonly maxAge: 500;
    readonly pointCount: 50;
    readonly speedMultiplier: 0.6;
    readonly enableFade: false;
    readonly enableShaderEffect: false;
    readonly effectAmplitude: 2;
    readonly backgroundColor: [number, number, number, number];
};
