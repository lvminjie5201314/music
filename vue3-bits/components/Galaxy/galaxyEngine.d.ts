import { GalaxyProps } from './types';
/**
 * Mount a `Galaxy` canvas into `container` and keep it in sync with `props`.
 * Returns a `{ dispose }` handle. The heavy WebGL bootstrap is deferred one tick
 * so that, in environments without WebGL (jsdom), `dispose()` can cancel the
 * pending bootstrap before any `getContext` call.
 */
export declare function createGalaxy(container: HTMLElement, props: GalaxyProps): {
    dispose: () => void;
};
