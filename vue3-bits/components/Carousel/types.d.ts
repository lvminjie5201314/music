import { CSSProperties } from 'vue';
export interface CarouselItem {
    /** Card title (rendered bold). */
    title: string;
    /** Card description paragraph. */
    description: string;
    /** Stable id (used only as part of the Vue `:key`). */
    id: number;
    /**
     * Glyph rendered in the white circular badge. One of the built-in inline SVG
     * keys (a faithful, dependency-free replacement for `react-icons`):
     * `'fileText' | 'circle' | 'layers' | 'layout' | 'code'`. Omit to hide it.
     */
    icon?: 'fileText' | 'circle' | 'layers' | 'layout' | 'code';
}
export interface CarouselProps {
    /** Cards to display. Defaults to the 5-item react-bits sample. */
    items?: CarouselItem[];
    /** Width (px) of the carousel viewport; the card width derives from it. */
    baseWidth?: number;
    /** Advance to the next card automatically on a timer. */
    autoplay?: boolean;
    /** Autoplay interval in ms. */
    autoplayDelay?: number;
    /** Pause the autoplay timer while the pointer is over the carousel. */
    pauseOnHover?: boolean;
    /** Infinite loop — clones the first/last cards and wraps seamlessly. */
    loop?: boolean;
    /** Circular "round" variant (square cards + round container). */
    round?: boolean;
    /** Extra CSS class appended to the root element. */
    className?: string;
    /** Inline style merged onto the root element. */
    style?: CSSProperties;
}
