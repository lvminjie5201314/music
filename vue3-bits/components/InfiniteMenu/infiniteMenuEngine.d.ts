import { InfiniteMenuProps, InfiniteMenuHooks } from './types';
/**
 * Mount a native-WebGL2 <InfiniteMenu> onto `canvas` and keep it animating.
 * Returns a `{ dispose }` handle. Returns a safe no-op when WebGL2 is missing
 * (jsdom) and never throws.
 */
export declare function createInfiniteMenu(canvas: HTMLCanvasElement, props: InfiniteMenuProps, hooks?: InfiniteMenuHooks): {
    dispose: () => void;
};
