import { Locale, Dict } from '../i18n';
/**
 * Local i18n dictionary for the `OptionWheel` demo + component.
 *
 * Pure data — only a type import from the central `i18n.ts`. It is eagerly
 * globbed by `i18n.ts` (`./i18n/*.ts`) and shallow-merged on top of the base
 * messages, so every `demo.option-wheel.*` / `param.option-wheel.*` key below
 * is available via `t()` in `OptionWheelDemo.vue` without touching the base
 * dictionary.
 */
export declare const dict: Record<Locale, Dict>;
