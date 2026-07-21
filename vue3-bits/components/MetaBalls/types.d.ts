import { CSSProperties } from 'vue';
/**
 * Public prop contract for <MetaBalls>.
 *
 * A faithful Vue 3 port of the react-bits `MetaBalls` (#71): a full-screen
 * fragment shader draws `ballCount` metaballs that orbit, merge and split,
 * tinted toward `color`, plus an interactive "cursor" metaball that follows the
 * pointer (or idles on a slow orbit). The official component is written with
 * the `ogl` WebGL micro-library; per the vue3-bits porting rules (no new
 * runtime deps; WebGL carried by native three.js) we reproduce it 1:1 with
 * three.js' `ShaderMaterial` — three is already a peer dependency.
 *
 * React → Vue mapping:
 *  - `useRef` (container / per-frame mutable state) → `ref<HTMLDivElement>`
 *    plus plain closure locals inside `onMounted` (mutated ~60fps, never
 *    reactive);
 *  - `useEffect(() => { …; return cleanup }, [deps…])` → `onMounted` bootstrap
 *    with `onUnmounted` cleanup. Live prop changes are pushed into uniforms each
 *    frame (mirrors the source's `propsRef`) instead of tearing the renderer
 *    down and rebuilding it on every edit.
 *  - `style` / `className` are appended to the root for library consistency
 *    (the source react-bits component exposes neither, but every vue3-bits
 *    component does, so they are added here).
 */
export interface MetaBallsProps {
    /** Base color of the orbiting metaballs (raw sRGB hex, fed 1:1 into the shader). */
    color?: string;
    /** Color of the interactive cursor metaball. */
    cursorBallColor?: string;
    /** Radius of the cursor metaball in shader space. */
    cursorBallSize?: number;
    /** Number of orbiting metaballs (clamped to 50 internally). */
    ballCount?: number;
    /** Scale factor mapping pixels → shader coordinate space (smaller = larger balls). */
    animationSize?: number;
    /** Let the pointer drive the cursor metaball; when false it idles on an orbit. */
    enableMouseInteraction?: boolean;
    /** Render on a transparent background (edges fade out) instead of opaque black. */
    enableTransparency?: boolean;
    /** Lerp factor (0..1) for the cursor metaball easing toward its target. */
    hoverSmoothness?: number;
    /** Multiplier on each ball's orbit radius (higher = tighter clump). */
    clumpFactor?: number;
    /** Animation speed multiplier. */
    speed?: number;
    /** Extra CSS class appended to the root element. */
    className?: string;
    /** Inline style object merged onto the root element. */
    style?: CSSProperties;
}
/** Authoritative default values, copied verbatim from `react-bits.md`. */
export declare const META_BALLS_DEFAULTS: {
    readonly color: "#ffffff";
    readonly cursorBallColor: "#ffffff";
    readonly cursorBallSize: 3;
    readonly ballCount: 15;
    readonly animationSize: 30;
    readonly enableMouseInteraction: true;
    readonly enableTransparency: false;
    readonly hoverSmoothness: 0.05;
    readonly clumpFactor: 1;
    readonly speed: 0.3;
};
