import { Locale, Dict } from '../i18n';
/**
 * Local i18n dictionary for the `CursorGrid` demo + component.
 *
 * Pure data — only a type import from the central `i18n.ts`. It is eagerly
 * globbed by `i18n.ts` and shallow-merged on top of the base messages, so every
 * `demo.cursor-grid.*` / `param.cursor-grid.*` key below is available via `t()`
 * in `CursorGridDemo.vue` without touching the base dictionary.
 *
 * Reused shared control keys (from the base `i18n.ts`): `ctrl.colors`,
 * `ctrl.appearance`, `ctrl.motion`, `ctrl.interaction`, `ctrl.opacity`,
 * `ctrl.radius`. No new `ctrl.*` keys were needed — every CursorGrid prop maps
 * onto an existing shared group, and per-prop field labels reuse the
 * `param.cursor-grid.*` keys defined below.
 */
export declare const dict: Record<Locale, Dict>;
