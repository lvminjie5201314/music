import { LiquidEtherProps } from './types';
/** Public handle returned by the factory. */
export interface LiquidEtherInstance {
    dispose: () => void;
}
export declare function createLiquidEther(container: HTMLElement, props?: LiquidEtherProps): LiquidEtherInstance;
