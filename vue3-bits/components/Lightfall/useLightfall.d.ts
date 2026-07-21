import { LightfallProps } from './types';
/**
 * Mount a `Lightfall` canvas into `container` and keep it in sync with `props`.
 *
 * @returns A `{ dispose }` handle that fully tears down GL + watchers.
 */
export declare function useLightfall(container: HTMLElement, props: LightfallProps): {
    dispose: () => void;
};
