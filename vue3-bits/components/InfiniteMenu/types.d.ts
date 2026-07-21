/**
 * Public prop contract for <InfiniteMenu>.
 *
 * 1:1 Vue3 / TypeScript port of the react-bits `InfiniteMenu` component. The
 * engine (`infiniteMenuEngine.ts`) is a native WebGL2 port rebuilt with the
 * in-repo `miniMath` subset (instead of the `gl-matrix` dependency, which
 * vue3-bits does not ship). WebGL2 is required; missing context is a no-op
 * (never throws) so it is safe to mount under jsdom.
 */
/** A single menu item rendered on a disc. */
export interface InfiniteMenuItem {
    /** Image URL for the disc texture (square-ish recommended). */
    image: string;
    /** Click-through link; opened in a new tab when it starts with `http`. */
    link: string;
    /** Overlay title. */
    title: string;
    /** Overlay description. */
    description: string;
}
/** Public props for <InfiniteMenu>. All optional. */
export interface InfiniteMenuProps {
    /** Items displayed on the rotating sphere of discs. */
    items?: InfiniteMenuItem[];
    /** Overall scale of the menu (affects camera distance). */
    scale?: number;
    /** Extra CSS class applied to the container element. */
    className?: string;
}
/** Single source of truth for every <InfiniteMenu> default. */
export declare const DEFAULT_INFINITE_MENU_PROPS: {
    readonly items: InfiniteMenuItem[];
    readonly scale: 1;
    readonly className: "";
};
/** Internal callbacks the engine uses to drive the React-like overlay. */
export interface InfiniteMenuHooks {
    onActiveItemChange?: (index: number) => void;
    onMovementChange?: (isMoving: boolean) => void;
}
