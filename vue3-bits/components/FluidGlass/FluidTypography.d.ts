/**
 * FluidTypography — CanvasTexture wordmark, faithful to react-bits <Text>.
 *
 * react-bits uses drei `<Text>` (which depends on `troika-three-text`, not in
 * cientos). We instead draw "React Bits" into a 2D canvas and wrap it in a
 * `THREE.Mesh(PlaneGeometry, MeshBasicMaterial{ map })`. Zero external
 * resources, system fonts only.
 *
 * jsdom guards: `canvas.getContext('2d')` returns `null` there, so we return a
 * 1×1 coloured fallback mesh and never throw.
 */
import * as THREE from 'three';
export interface TypographyOptions {
    text?: string;
    fontSize?: number;
    color?: string;
}
export declare function createTypography(opts?: TypographyOptions): THREE.Mesh;
