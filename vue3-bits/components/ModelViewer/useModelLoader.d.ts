import { Ref } from 'vue';
import * as THREE from 'three';
export type LoadedModel = THREE.Object3D;
/** Extract the lower-cased file extension from a (possibly query/hash suffixed) URL. */
export declare function getExtension(url: string): string;
export interface UseModelLoaderReturn {
    /** Load (and clone) a model by URL; resolves with the Object3D. */
    load: (url: string) => Promise<LoadedModel>;
    /** The loaded (and cloned) Object3D, or null before load. */
    content: Ref<LoadedModel | null>;
    /** Alias of `content` (raw model object handed to ModelInner). */
    model: Ref<LoadedModel | null>;
    /** True while a load is in flight. */
    loading: Ref<boolean>;
    /** Last load error, or null. */
    error: Ref<Error | null>;
}
/**
 * Composable that loads a 3D model by URL based on its file extension.
 * The loaded object is `.clone()`-ed so callers can mutate it freely.
 */
export declare function useModelLoader(): UseModelLoaderReturn;
