import { BallpitProps } from './types';
import * as THREE from 'three';
/**
 * Imperative three.js engine for <Ballpit>.
 *
 * 1:1 port of the react-bits `Ballpit` component (react-bits.md §29). The
 * original is a **three.js** engine (NOT ogl): it renders an `InstancedMesh` of
 * physically-based spheres inside an environment-mapped scene, driven by a
 * custom particle-physics solver (`W`). We keep the behavior — and the
 * `MeshPhysicalMaterial` scattering `onBeforeCompile` (`Y`) — byte-for-byte.
 *
 * Deviations (all to satisfy the jsdom / zero-new-dep constraints):
 *  - three's `Timer` (used by react-bits) is not present in r166, so the render
 *    loop derives delta time from `performance.now()` instead;
 *  - pointer tracking is attached to the canvas (scoped) rather than react-bits'
 *    global `document.body` pointer-map — identical for a single instance and
 *    keeps `dispose()` free of leaked global listeners;
 *  - the whole WebGL bootstrap is guarded: `isWebGLAvailable()` early-returns a
 *    no-op before any `WebGLRenderer` is constructed, and the bootstrap is also
 *    wrapped in try/catch.
 *
 * three.js is a peer dependency already used by `LiquidEther` / `FloatingLines`,
 * so this port adds no new dependency.
 */
/** A no-op result returned when WebGL is unavailable (jsdom / SSR). */
interface BallpitHandle {
    three: THREE.WebGLRenderer | null;
    spheres: THREE.InstancedMesh | null;
    setCount: (count: number) => void;
    togglePause: () => void;
    dispose: () => void;
}
/**
 * Mount a `Ballpit` into `canvas` and keep it in sync with the engine config.
 *
 * Returns a `{ three, spheres, setCount, togglePause, dispose }` handle. When
 * WebGL is unavailable (jsdom / SSR) it returns a no-op handle so mounting stays
 * side-effect-free and never throws.
 */
export declare function createBallpit(canvas: HTMLCanvasElement, config?: BallpitProps): BallpitHandle;
export {};
