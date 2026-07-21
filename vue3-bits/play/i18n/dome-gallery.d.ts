import { Locale, Dict } from '../i18n';
/**
 * Local i18n dictionary for the `DomeGallery` demo.
 *
 * Every visible string in `DomeGalleryDemo.vue` is routed through `t()`; the
 * keys below are merged into the base dictionary by `i18n.ts`. Does not touch
 * the base file. The drag gesture is implemented with native pointer events
 * (no `@use-gesture` dependency), but that is internal and needs no i18n key.
 */
export declare const dict: Record<Locale, Dict>;
