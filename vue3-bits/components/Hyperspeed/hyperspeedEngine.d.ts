import { HyperspeedProps } from './types';
/**
 * Mount a three.js <Hyperspeed> into `container` and keep it animating.
 * Returns a `{ dispose }` handle. Returns a safe no-op when WebGL is missing
 * (jsdom) and never throws.
 */
export declare function createHyperspeed(container: HTMLElement, props: HyperspeedProps): {
    dispose: () => void;
};
