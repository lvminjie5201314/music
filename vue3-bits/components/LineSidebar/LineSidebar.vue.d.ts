import { LineSidebarProps, Falloff } from './types';
declare const _default: import('vue').DefineComponent<LineSidebarProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    itemClick: (index: number, label: string) => any;
}, string, import('vue').PublicProps, Readonly<LineSidebarProps> & Readonly<{
    onItemClick?: ((index: number, label: string) => any) | undefined;
}>, {
    className: string;
    fontSize: number;
    items: string[];
    accentColor: string;
    textColor: string;
    markerColor: string;
    showIndex: boolean;
    showMarker: boolean;
    proximityRadius: number;
    maxShift: number;
    falloff: Falloff;
    markerLength: number;
    markerGap: number;
    tickScale: number;
    scaleTick: boolean;
    itemGap: number;
    smoothing: number;
    defaultActive: number | null;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    listRef: HTMLUListElement;
}, HTMLElement>;
export default _default;
