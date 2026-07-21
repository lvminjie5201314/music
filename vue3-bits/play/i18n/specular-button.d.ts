import { Locale, Dict } from '../i18n';
/**
 * Local i18n dictionary for the `SpecularButton` demo + component.
 *
 * Pure data — only a type import from the central `i18n.ts`. It is eagerly
 * globbed by `i18n.ts` (`./i18n/*.ts`) and shallow-merged on top of the base
 * messages, so every `demo.specular-button.*` / `param.specular-button.*` key
 * below is available via `t()` in `SpecularButtonDemo.vue` without touching the
 * base dictionary.
 *
 * Reused shared control keys (from the base `i18n.ts`): `ctrl.appearance`,
 * `ctrl.interaction`, `ctrl.colors`. Per-prop field labels reuse the
 * `param.specular-button.*` keys defined below.
 */
export declare const dict: Record<Locale, Dict>;
