/**
 * Public prop contract for <AnimatedList>.
 *
 * A Vue3 port of the react-bits `AnimatedList` scroll-reveal list. Items fade /
 * scale in when they enter the scroll viewport (via a native
 * `IntersectionObserver` + CSS transition), support ↑/↓ keyboard navigation,
 * and emit `itemSelect` (camelCase) with `[item, index]`.
 */
export interface AnimatedListProps {
    /** List entries. */
    items?: string[];
    /** Extra CSS class appended to the container. */
    className?: string;
    /** Extra CSS class appended to each item box. */
    itemClassName?: string;
    /** Show the top / bottom fade gradients. */
    showGradients?: boolean;
    /** Enable ↑/↓/Tab/Enter keyboard navigation. */
    enableArrowNavigation?: boolean;
    /** Show the scrollbar. */
    displayScrollbar?: boolean;
    /** Initially selected item index (use `-1` for none). */
    initialSelectedIndex?: number;
}
