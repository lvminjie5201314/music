import { Locale, Dict } from '../i18n';
/**
 * Local i18n dictionary for the `GradualBlur` demo + component.
 *
 * Pure data — only a type import from the central `i18n.ts`. It is eagerly
 * globbed by `i18n.ts` (`./i18n/*.ts`) and shallow-merged on top of the base
 * messages, so every `demo.gradual-blur.*` / `param.gradual-blur.*` key below is
 * available via `t()` in `GradualBlurDemo.vue` without touching the base
 * dictionary.
 *
 * Reused shared control keys (from the base `i18n.ts`): `ctrl.appearance`,
 * `ctrl.motion`, `ctrl.interaction`, `ctrl.opacity`. No new `ctrl.*` keys were
 * needed — every `GradualBlur` prop maps onto one of the existing shared groups,
 * and per-prop field labels reuse the `param.gradual-blur.*` keys defined below.
 */
export declare const dict: Record<Locale, Dict>;
