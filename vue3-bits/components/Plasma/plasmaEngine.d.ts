import { PlasmaProps } from './types';
/**
 * Mount a `Plasma` canvas into `container` and keep it in sync with `props`.
 *
 * Returns a `{ dispose }` handle. The heavy WebGL bootstrap is deferred one tick
 * so that, in environments without WebGL (jsdom), `dispose()` can cancel the
 * pending bootstrap before any `getContext` call — keeping `mount()` side-effect
 * free.
 */
export declare function createPlasma(container: HTMLElement, props: PlasmaProps): {
    dispose: () => void;
};
