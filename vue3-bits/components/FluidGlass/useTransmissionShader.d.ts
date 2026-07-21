/**
 * useTransmissionShader — custom glass refraction shader.
 *
 * Faithful reimplementation of drei's `MeshTransmissionMaterial` using only
 * vanilla THREE.ShaderMaterial. This is the missing piece that makes our port
 * actually look like react-bits: the original uses a custom GLSL shader that
 * explicitly samples the offscreen FBO (`buffer`) texture and distorts its UVs
 * by the refraction vector (viewDir × normal × IOR) to produce visible glass
 * refraction with chromatic aberration and Fresnel edge highlights.
 *
 * WHY NOT MeshPhysicalMaterial.transmission?
 * Three.js' built-in transmission on MeshPhysicalMaterial is a general-purpose
 * PBR feature that refracts objects physically behind the mesh via depth-buffer
 * techniques. It does NOT accept an explicit `buffer` texture for controlled
 * UV distortion, nor does it produce the same visual quality as the custom
 * shader. Our earlier attempt (screenshot: flat pink blob) proved this gap.
 *
 * Zero new dependencies — pure three.js ShaderMaterial.
 */
import * as THREE from 'three';
export interface TransmissionShaderParams {
    /** FBO texture to refract (required — the offscreen content). */
    buffer: THREE.Texture;
    /** Index of refraction (default 1.15). */
    ior?: number;
    /** Refraction distortion strength (default 5). */
    thickness?: number;
    /** RGB channel IOR spread for chromatic aberration (default 0.1). */
    chromaticAberration?: number;
    /** Directional smear amount (default 0.01). */
    anisotropy?: number;
    /** Surface roughness / blurriness (default 0). */
    roughness?: number;
    /** Surface tint colour (default white). */
    color?: string;
}
export declare function createTransmissionMaterial(params: TransmissionShaderParams): THREE.ShaderMaterial;
/** Update uniforms imperatively (safe to call every frame). */
export declare function updateTransmissionUniforms(mat: THREE.ShaderMaterial, updates: Partial<{
    buffer: THREE.Texture;
    ior: number;
    thickness: number;
    chromaticAberration: number;
    anisotropy: number;
    roughness: number;
    color: string;
    resolution: [number, number];
}>): void;
