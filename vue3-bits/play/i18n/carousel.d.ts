import { Locale, Dict } from '../i18n';
/**
 * Local i18n dictionary for the `Carousel` demo + component.
 *
 * Pure data — only a type import from the central `i18n.ts`. It is eagerly
 * globbed by `i18n.ts` (`./i18n/*.ts`) and shallow-merged on top of the base
 * messages, so every `demo.carousel.*` / `param.carousel.*` key below is
 * available via `t()` in `CarouselDemo.vue` without touching the base
 * dictionary.
 *
 * Reused shared control keys (from the base `i18n.ts`): `ctrl.colors`,
 * `ctrl.motion`, `ctrl.appearance`. No new `ctrl.*` keys were needed — every
 * `Carousel` prop maps onto an existing shared group, and per-prop field labels
 * reuse the `param.carousel.*` keys defined below.
 */
export declare const dict: Record<Locale, Dict>;
