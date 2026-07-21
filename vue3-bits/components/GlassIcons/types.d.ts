import { VNode } from 'vue';
/** A single glass icon entry. */
export interface GlassIconsItem {
    /** Icon node (e.g. an inline `<svg>` VNode). */
    icon?: VNode;
    /** A named gradient key (`blue`/`purple`/`red`/`indigo`/`orange`/`green`) or any CSS color. */
    color: string;
    /** Accessible label shown on hover. */
    label: string;
    /** Extra class on the button. */
    customClass?: string;
}
/** Public props for `<GlassIcons>`. A Vue3 port of react-bits `GlassIcons`. */
export interface GlassIconsProps {
    items: GlassIconsItem[];
    className?: string;
}
/** 1:1 defaults mirroring the react-bits `GlassIcons`. */
export declare const DEFAULT_GLASS_ICONS_PROPS: {
    readonly className: "";
};
