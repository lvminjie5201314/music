/**
 * useFluidFbo — offscreen FBO bridge for the refraction content.
 *
 * Faithful 1:1 port of react-bits `useFBO()` + `createPortal(children, scene)`
 * + per-frame `gl.render(scene, camera)`. We build our own `THREE.Scene`
 * (offscreen) and `THREE.WebGLRenderTarget`, and every frame (driven by
 * `FluidMesh`'s `useLoop().onBeforeRender`) we render the offscreen scene into
 * the target. The resulting texture is used in two places:
 *   1. the main-scene background plane (visible content, z < 15), and
 *   2. automatically refracted by the native `MeshPhysicalMaterial` transmission
 *      pass (which refracts whatever is in the main scene behind the glass).
 *
 * This mirrors react-bits' dual use of the `buffer` texture. No new deps:
 * only the already-bundled `three` + `@tresjs/core` peers.
 */
import * as THREE from 'three';
/** Scroll range (world units) — react-bits uses pages=3, distance=0.4. */
export declare const FBO_MAX_SCROLL = 6;
export interface FluidFbo {
    scene: THREE.Scene;
    target: THREE.WebGLRenderTarget;
    texture: THREE.Texture;
    contentGroup: THREE.Group;
    render: (renderer: THREE.WebGLRenderer | null, camera: THREE.Camera | null, delta?: number) => void;
    resize: (width: number, height: number) => void;
    setScroll: (offset: number) => void;
    getMaxScroll: () => number;
    dispose: () => void;
}
export declare function useFluidFbo(): FluidFbo;
