import { Locale, Dict } from '../i18n';
/**
 * Local i18n dictionary for the `TargetCursor` demo + component.
 *
 * Pure data — only a type import from the central `i18n.ts`. It is eagerly
 * globbed by `i18n.ts` and shallow-merged on top of the base messages, so every
 * `demo.target-cursor.*` / `param.target-cursor.*` key below is available via
 * `t()` in `TargetCursorDemo.vue` without touching the base dictionary.
 *
 * Reused shared control keys (from the base `i18n.ts`): `ctrl.colors`,
 * `ctrl.appearance`, `ctrl.motion`, `ctrl.interaction`. Every TargetCursor prop
 * maps onto an existing shared group; per-prop field labels reuse the
 * `param.target-cursor.*` keys defined below.
 */
export declare const dict: Record<Locale, Dict>;
