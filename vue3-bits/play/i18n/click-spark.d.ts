import { Locale, Dict } from '../i18n';
/**
 * Local i18n dictionary for the `ClickSpark` demo + component.
 *
 * Pure data — only a type import from the central `i18n.ts`. It is eagerly
 * globbed by `i18n.ts` and shallow-merged on top of the base messages, so every
 * `demo.click-spark.*` / `param.click-spark.*` key below is available via `t()`
 * in `ClickSparkDemo.vue` without touching the base dictionary.
 *
 * Reused shared control keys (from the base `i18n.ts`): `ctrl.colors`,
 * `ctrl.appearance`, `ctrl.motion`, `ctrl.interaction`, `ctrl.opacity`,
 * `install.title`, `usage.title`, `usage.copy`, `usage.copied`, `params.*`.
 * Every ClickSpark prop maps onto an existing shared group; per-prop field
 * labels reuse the `param.click-spark.*` keys defined below.
 */
export declare const dict: Record<Locale, Dict>;
