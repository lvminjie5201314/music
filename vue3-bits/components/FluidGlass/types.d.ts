/**
 * FluidGlass — public types.
 *
 * Vue3 / TresJS port of react-bits `FluidGlass`. The original R3F + drei
 * component pulled in @react-three/fiber, @react-three/drei (MeshTransmission-
 * Material / ScrollControls / useFBO / useGLTF / Image / Text) and external
 * GLB assets. This port replaces all of that with the already-bundled peers
 * @tresjs/core + three and a real THREE.MeshPhysicalMaterial, while keeping
 * the same public API surface (mode + per-mode override objects).
 */
export type FluidGlassMode = 'lens' | 'bar' | 'cube';
/** A single nav entry used by bar mode (substitute for drei <Text> nav row). */
export interface FluidGlassNavItem {
    label: string;
    link?: string;
}
/**
 * Per-mode override bag. Mirrors react-bits `ModeProps`.
 * Recognised keys (all optional, with react-bits defaults):
 *  - scale, ior, thickness, roughness, transmission, chromaticAberration,
 *    anisotropy, color, attenuationColor, attenuationDistance, navItems
 */
export interface FluidGlassModeProps {
    scale?: number;
    ior?: number;
    thickness?: number;
    roughness?: number;
    transmission?: number;
    chromaticAberration?: number;
    anisotropy?: number;
    color?: string;
    attenuationColor?: string;
    attenuationDistance?: number;
    navItems?: FluidGlassNavItem[];
}
export interface FluidGlassProps {
    /** Which glass geometry / behaviour to render. Default `'lens'`. */
    mode?: FluidGlassMode;
    /** Overrides applied in `lens` mode. */
    lensProps?: FluidGlassModeProps;
    /** Overrides applied in `bar` mode (also carries `navItems`). */
    barProps?: FluidGlassModeProps;
    /** Overrides applied in `cube` mode. */
    cubeProps?: FluidGlassModeProps;
    /** Class applied to the root wrapper. */
    className?: string;
    /** Canvas width. A number is treated as px. Default `400`. */
    width?: number | string;
    /** Canvas height. A number is treated as px. Default `400`. */
    height?: number | string;
}
/** Material parameters fully resolved against per-mode defaults. */
export interface ResolvedModeParams {
    ior: number;
    thickness: number;
    roughness: number;
    transmission: number;
    chromaticAberration: number;
    anisotropy: number;
    color: string;
    attenuationColor: string;
    attenuationDistance: number;
}
/**
 * Resolve per-mode material defaults (faithful to react-bits).
 *
 * - `ior` 1.15, `roughness` 0, `transmission` 1, `chromaticAberration` 0.1,
 *   `anisotropy` 0.01, `color` / `attenuationColor` `#ffffff` for all modes.
 * - `thickness` 5 (lens/cube) or 10 (bar); `attenuationDistance` 0.6
 *   (lens/cube) or 0.25 (bar).
 */
export declare function resolveModeParams(props?: FluidGlassModeProps, mode?: FluidGlassMode): ResolvedModeParams;
