import { LightRaysProps } from './types';
/**
 * Mount a `LightRays` canvas into `container` and keep it in sync with `props`.
 *
 * Returns a `{ dispose }` handle. The heavy WebGL bootstrap is deferred one tick
 * so that, in environments without WebGL (jsdom), `dispose()` can cancel the
 * pending bootstrap before any `getContext` call — keeping `mount()` side-effect
 * free. In a real browser the bootstrap runs on the next tick and renders.
 */
export declare function createLightRays(container: HTMLElement, props: LightRaysProps): {
    dispose: () => void;
};
