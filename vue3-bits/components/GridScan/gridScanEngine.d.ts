import { GridScanProps } from './types';
/**
 * Mount a <GridScan> into `container` and keep it animating.
 * Returns a `{ dispose }` handle.
 */
export declare function createGridScan(container: HTMLElement, props: GridScanProps): {
    dispose: () => void;
};
