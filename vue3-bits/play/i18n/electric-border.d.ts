import { Locale, Dict } from '../i18n';
/**
 * Local i18n dictionary for the `ElectricBorder` demo + component.
 *
 * Pure data — only a type import from the central `i18n.ts`. It is eagerly
 * globbed by `i18n.ts` and shallow-merged on top of the base messages, so every
 * `demo.electric-border.*` / `param.electric-border.*` key below is available
 * via `t()` in `ElectricBorderDemo.vue` without touching the base dictionary.
 *
 * All control-group titles reuse existing shared keys (`ctrl.colors`,
 * `ctrl.motion`, `ctrl.appearance`); no new shared `ctrl.*` keys are needed.
 * Every key is namespaced under `electric-border`, so there is zero conflict
 * with any other component's dictionary.
 */
export declare const dict: Record<Locale, Dict>;
