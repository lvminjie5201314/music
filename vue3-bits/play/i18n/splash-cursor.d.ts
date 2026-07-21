import { Locale, Dict } from '../i18n';
/**
 * Local i18n dictionary for the `SplashCursor` demo + component.
 *
 * Pure data — only a type import from the central `i18n.ts`. It is eagerly
 * globbed by `i18n.ts` and shallow-merged on top of the base messages, so every
 * `demo.splash-cursor.*` / `param.splash-cursor.*` key below is available via
 * `t()` in `SplashCursorDemo.vue` without touching the base dictionary.
 *
 * Reused shared control-group keys from the base `i18n.ts`: `ctrl.colors`,
 * `ctrl.appearance`, `ctrl.motion`, `ctrl.interaction`. The per-prop field
 * labels reuse the `param.splash-cursor.*` keys defined below.
 */
export declare const dict: Record<Locale, Dict>;
