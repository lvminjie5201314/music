import { StaggeredMenuProps } from './types';
declare const _default: import('vue').DefineComponent<StaggeredMenuProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    menuOpen: () => any;
    menuClose: () => any;
}, string, import('vue').PublicProps, Readonly<StaggeredMenuProps> & Readonly<{
    onMenuOpen?: (() => any) | undefined;
    onMenuClose?: (() => any) | undefined;
}>, {
    position: "left" | "right";
    className: string;
    colors: string[];
    items: import('./types').StaggeredMenuItem[];
    accentColor: string;
    socialItems: import('./types').StaggeredMenuSocialItem[];
    displaySocials: boolean;
    displayItemNumbering: boolean;
    logoUrl: string;
    menuButtonColor: string;
    openMenuButtonColor: string;
    changeMenuColorOnOpen: boolean;
    closeOnClickAway: boolean;
    isFixed: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    toggleBtnRef: HTMLButtonElement;
    panelRef: HTMLElement;
}, HTMLDivElement>;
export default _default;
