import { Locale, Dict } from '../i18n';
/**
 * Local i18n dictionary for the `LogoLoop` demo + component.
 *
 * Pure data — only a type import from the central `i18n.ts`. It is eagerly
 * globbed by `i18n.ts` (`import.meta.glob('./i18n/*.ts')`) and shallow-merged on
 * top of the base messages, so every `demo.logo-loop.*` / `param.logo-loop.*`
 * key below is available via `t()` in `LogoLoopDemo.vue` without touching the
 * base dictionary.
 *
 * Reused shared control keys (from the base `i18n.ts`): `ctrl.colors`,
 * `ctrl.appearance`, `ctrl.motion`, `ctrl.interaction`, `ctrl.opacity`. No new
 * `ctrl.*` keys were needed — every LogoLoop prop maps onto an existing shared
 * group, and per-prop field labels reuse the `param.logo-loop.*` keys defined
 * below.
 */
export declare const dict: Record<Locale, Dict>;
