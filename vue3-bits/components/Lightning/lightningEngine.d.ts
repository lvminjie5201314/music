import { LightningProps } from './types';
/**
 * Mount a <Lightning> canvas into `container` and keep it animating.
 * Returns a `{ dispose }` handle.
 */
export declare function createLightning(container: HTMLElement, props: LightningProps): {
    dispose: () => void;
};
