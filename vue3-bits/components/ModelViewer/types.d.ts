import { Group } from 'three';
/**
 * Environment presets for `@tresjs/cientos` <Environment>.
 * `'none'` means the component is not rendered at all.
 *
 * NOTE: aligned to the presets actually shipped by `@tresjs/cientos@5.8.1`
 * (`keyof typeof environmentPresets`). The originally suggested
 * `apartment` / `lobby` / `park` / `warehouse` are NOT valid in cientos v5
 * and would throw at runtime, so they are intentionally omitted here.
 */
export type EnvironmentPreset = 'none' | 'city' | 'dawn' | 'forest' | 'hangar' | 'modern' | 'night' | 'shangai' | 'snow' | 'studio' | 'sunset' | 'umbrellas' | 'urban';
/** Public props for <ModelViewer>. All optional except `url`. */
export interface ModelViewerProps {
    /** Model URL (required). Supports .glb / .gltf / .fbx / .obj. */
    url: string;
    /** Canvas width. Number is treated as px. */
    width?: number | string;
    /** Canvas height. Number is treated as px. */
    height?: number | string;
    /** Billboard horizontal offset in NDC space. */
    modelXOffset?: number;
    /** Billboard vertical offset in NDC space. */
    modelYOffset?: number;
    /** Initial rotation around X axis, in degrees. */
    defaultRotationX?: number;
    /** Initial rotation around Y axis, in degrees. */
    defaultRotationY?: number;
    /** Initial camera Z distance. */
    defaultZoom?: number;
    /** Minimum zoom distance (OrbitControls / pinch). */
    minZoomDistance?: number;
    /** Maximum zoom distance (OrbitControls / pinch). */
    maxZoomDistance?: number;
    /** Enable mouse parallax (non-touch only). */
    enableMouseParallax?: boolean;
    /** Enable drag-to-rotate. */
    enableManualRotation?: boolean;
    /** Enable hover rotation (non-touch only). */
    enableHoverRotation?: boolean;
    /** Enable manual zoom (OrbitControls / pinch). */
    enableManualZoom?: boolean;
    /** Ambient light intensity. */
    ambientIntensity?: number;
    /** Key (top-right) directional light intensity. */
    keyLightIntensity?: number;
    /** Fill (left) directional light intensity. */
    fillLightIntensity?: number;
    /** Rim (back) directional light intensity. */
    rimLightIntensity?: number;
    /** Environment preset. `'none'` disables it. */
    environmentPreset?: EnvironmentPreset;
    /** Automatically frame the model by computing camera distance from fov. */
    autoFrame?: boolean;
    /** Image shown (blurred) while loading. */
    placeholderSrc?: string;
    /** Show the screenshot button. */
    showScreenshotButton?: boolean;
    /** Fade material opacity from 0 to 1 on load. */
    fadeIn?: boolean;
    /** Continuously auto-rotate the model. */
    autoRotate?: boolean;
    /** Auto-rotate speed in radians per second. */
    autoRotateSpeed?: number;
    /** Callback fired once the model is loaded & normalized. */
    onModelLoaded?: () => void;
}
/** Props consumed by the internal ModelInner (public props + contact ref). */
export interface ModelInnerProps extends ModelViewerProps {
    /** Ref to the <TresGroup> wrapping <ContactShadows>, used by capture() to hide it. */
    contactRef?: Group | null;
}
/** Methods exposed on <ModelViewer> (and <ModelInner>) for parent ref access. */
export interface ModelViewerExpose {
    capture: () => void;
}
