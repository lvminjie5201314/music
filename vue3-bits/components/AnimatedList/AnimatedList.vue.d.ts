import { AnimatedListProps } from './types';
declare const _default: import('vue').DefineComponent<AnimatedListProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    itemSelect: (item: string, index: number) => any;
}, string, import('vue').PublicProps, Readonly<AnimatedListProps> & Readonly<{
    onItemSelect?: ((item: string, index: number) => any) | undefined;
}>, {
    className: string;
    items: string[];
    itemClassName: string;
    showGradients: boolean;
    enableArrowNavigation: boolean;
    displayScrollbar: boolean;
    initialSelectedIndex: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    listRef: HTMLDivElement;
}, HTMLDivElement>;
export default _default;
