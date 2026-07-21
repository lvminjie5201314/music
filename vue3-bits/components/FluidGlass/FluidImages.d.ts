/**
 * FluidImages — refracted image group, faithful to react-bits <Image>.
 *
 * react-bits renders 5 <Image> across 3 scroll pages. We load
 * `/assets/demo/cs{1,2,3}.webp` with three's built-in `TextureLoader` and lay
 * them out in a group. Missing assets (404 / jsdom) fall back to procedural
 * coloured-gradient `CanvasTexture`s — never throwing.
 */
import * as THREE from 'three';
export interface ImagesOptions {
    urls?: string[];
}
export declare function createImages(opts?: ImagesOptions): Promise<THREE.Group>;
