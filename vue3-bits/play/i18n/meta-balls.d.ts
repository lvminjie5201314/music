import { Locale, Dict } from '../i18n';
/**
 * Local i18n dictionary for the `MetaBalls` demo + component.
 *
 * Pure data — only a type import from the central `i18n.ts`. It is eagerly
 * globbed by `i18n.ts` and shallow-merged on top of the base messages, so every
 * `demo.meta-balls.*` / `param.meta-balls.*` key below is available via `t()`
 * in `MetaBallsDemo.vue` without touching the base dictionary.
 *
 * Reused shared control-group keys (from the base `i18n.ts`): `ctrl.colors`,
 * `ctrl.appearance`, `ctrl.motion`, `ctrl.interaction`. No new `ctrl.*` keys
 * were needed — every MetaBalls prop maps onto an existing shared group, and
 * the per-prop field labels reuse the `param.meta-balls.*` keys defined below.
 */
export declare const dict: Record<Locale, Dict>;
