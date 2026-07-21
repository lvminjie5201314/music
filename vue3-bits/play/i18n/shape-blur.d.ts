import { Locale, Dict } from '../i18n';
/**
 * Local i18n dictionary for the `ShapeBlur` demo + component.
 *
 * Pure data — only a type import from the central `i18n.ts`. It is eagerly
 * globbed by `i18n.ts` (`./i18n/*.ts`) and shallow-merged on top of the base
 * messages, so every `demo.shape-blur.*` / `param.shape-blur.*` key below is
 * available via `t()` in `ShapeBlurDemo.vue` without touching the base
 * dictionary.
 *
 * Reused shared control keys (from the base `i18n.ts`): `ctrl.appearance`,
 * `ctrl.interaction`. No new `ctrl.*` keys were needed — every `ShapeBlur` prop
 * maps onto an existing shared group, and per-prop field labels reuse the
 * `param.shape-blur.*` keys defined below.
 */
export declare const dict: Record<Locale, Dict>;
