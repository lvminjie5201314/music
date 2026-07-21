import { Locale, Dict } from '../i18n';
/**
 * Local i18n dictionary for the `Crosshair` demo + component.
 *
 * Pure data — only a type import from the central `i18n.ts`. It is eagerly
 * globbed by `i18n.ts` and shallow-merged on top of the base messages, so every
 * `demo.crosshair.*` / `param.crosshair.*` key below is available via `t()` in
 * `CrosshairDemo.vue` without touching the base dictionary.
 *
 * Reused shared control-group keys (from the base `i18n.ts`): `ctrl.colors`,
 * `ctrl.appearance`, `ctrl.motion`, `ctrl.interaction`. The Crosshair props map
 * onto the `colors` and `appearance` groups; per-prop field labels reuse the
 * `param.crosshair.*` keys defined below.
 *
 * NOTE: the central `i18n.ts` defines `Locale = 'zh-CN' | 'en-US'`, so the
 * dictionary uses the `'en-US'` key (not the looser `'en'`) to typecheck
 * cleanly against `Record<Locale, Dict>`.
 */
export declare const dict: Record<Locale, Dict>;
