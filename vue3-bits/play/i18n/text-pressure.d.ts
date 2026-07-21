import { Locale, Dict } from '../i18n';
/**
 * Local i18n dictionary for the `TextPressure` demo + component.
 *
 * Pure data — only a type import from the central `i18n.ts`. It is eagerly
 * globbed by `i18n.ts` and shallow-merged on top of the base messages, so every
 * `demo.text-pressure.*` / `param.text-pressure.*` key below is available via
 * `t()` in `TextPressureDemo.vue` without touching the base dictionary.
 *
 * Reused shared control keys: `ctrl.text`, `ctrl.colors`, `ctrl.appearance`,
 * `ctrl.textColor`. The only new shared key added here is `ctrl.strokeColor`
 * (no existing key fit a stroke/outline color). All per-prop field labels reuse
 * the `param.text-pressure.*` keys defined below.
 */
export declare const dict: Record<Locale, Dict>;
