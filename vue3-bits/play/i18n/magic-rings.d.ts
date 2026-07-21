import { Locale, Dict } from '../i18n';
/**
 * Local i18n dictionary for the `MagicRings` demo + component.
 *
 * Pure data — only a type import from the central `i18n.ts`. It is eagerly
 * globbed by `i18n.ts` and shallow-merged on top of the base messages, so every
 * `demo.magic-rings.*` / `param.magic-rings.*` key below is available via `t()`
 * in `MagicRingsDemo.vue` without touching the base dictionary.
 *
 * Reused shared control keys (from the base `i18n.ts`): `ctrl.colors`,
 * `ctrl.appearance`, `ctrl.motion`, `ctrl.interaction`, `ctrl.opacity`. Every
 * MagicRings prop maps onto one of those existing groups, and per-prop field
 * labels reuse the `param.magic-rings.*` keys defined below.
 */
export declare const dict: Record<Locale, Dict>;
