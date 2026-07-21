import { Locale, Dict } from '../i18n';
/**
 * Local i18n dictionary for the `VariableProximity` demo + component.
 *
 * Pure data — only a type import from the central `i18n.ts`. It is eagerly
 * globbed by `i18n.ts` and shallow-merged on top of the base messages, so every
 * `demo.variable-proximity.*` / `param.variable-proximity.*` key below is
 * available via `t()` in `VariableProximityDemo.vue` without touching the base
 * dictionary.
 *
 * Reused shared control keys: `ctrl.text`, `ctrl.radius`, `ctrl.appearance`,
 * `ctrl.className` (defined in grid-distortion.ts) and `ctrl.falloff` (defined
 * in radar.ts) — both already globally available through the glob merge. The
 * only new shared keys added here are `ctrl.fromSettings` / `ctrl.toSettings`
 * (no existing key fit the two font-variation-settings strings). All per-prop
 * field labels reuse the `param.variable-proximity.*` keys defined below.
 */
export declare const dict: Record<Locale, Dict>;
