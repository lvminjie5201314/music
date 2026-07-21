import { Locale, Dict } from '../i18n';
/**
 * Local i18n dictionary for the `TrueFocus` demo.
 *
 * Pure data — only a type import from `i18n.ts`. Exposes the demo header keys
 * (`demo.true-focus.*`) and the per-prop description keys
 * (`param.true-focus.*`) for both `zh-CN` and `en-US`. The control-group
 * titles reuse the shared `ctrl.text` / `ctrl.appearance` / `ctrl.motion`
 * keys already present in the base `messages`, so no new `ctrl.*` keys are
 * required.
 */
export declare const dict: Record<Locale, Dict>;
