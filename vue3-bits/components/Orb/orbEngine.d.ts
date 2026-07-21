import { OrbProps } from './types';
/**
 * Mount an `Orb` canvas into `container` and keep it in sync with `props`.
 * Returns a `{ dispose }` handle. The heavy WebGL bootstrap is deferred one tick
 * so that, in environments without WebGL (jsdom), `dispose()` can cancel the
 * pending bootstrap before any `getContext` call.
 */
export declare function createOrb(container: HTMLElement, props: OrbProps): {
    dispose: () => void;
};
