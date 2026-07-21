import { Locale, Dict } from '../i18n';
/**
 * Local i18n dictionary for the `GridDistortion` demo.
 *
 * Shares the base `ctrl.radius` / `ctrl.strength` keys (mouse-influence radius
 * and distortion strength are exact fits). Adds the only missing control-group
 * labels (`ctrl.grid`, `ctrl.relaxation`, `ctrl.image`, `ctrl.className`) plus
 * the `demo.*` and `param.*` entries for this component. Merged on top of the
 * base `messages` by `i18n.ts` (no edit to that file needed).
 */
export declare const dict: Record<Locale, Dict>;
