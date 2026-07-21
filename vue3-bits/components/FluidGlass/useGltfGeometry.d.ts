import { Ref } from 'vue';
import { FluidGlassMode } from './types';
import * as THREE from 'three';
export interface GltfGeometryResult {
    geometry: Ref<THREE.BufferGeometry>;
    geoWidth: Ref<number>;
    source: Ref<'glb' | 'fallback'>;
    isReady: Ref<boolean>;
}
export declare function useGltfGeometry(getMode: () => FluidGlassMode): GltfGeometryResult;
