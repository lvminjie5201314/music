import { Locale, Dict } from '../i18n';
/**
 * Local i18n dictionary for the `Antigravity` demo + component.
 *
 * Pure data — only a type import from the central `i18n.ts`. It is eagerly
 * globbed by `i18n.ts` and shallow-merged on top of the base messages, so every
 * `demo.antigravity.*` / `param.antigravity.*` key below is available via `t()`
 * in `AntigravityDemo.vue` without touching the base dictionary.
 *
 * Reused shared control keys: `ctrl.colors`, `ctrl.appearance`, `ctrl.motion`.
 * The only new shared key added here is `ctrl.particleCount` (no existing key
 * fits "particle count"); it is defined in this module so the shallow-merge
 * picks it up without editing the central i18n.ts. All per-prop field labels
 * reuse the `param.antigravity.*` keys defined below.
 */
export declare const dict: Record<Locale, Dict>;
