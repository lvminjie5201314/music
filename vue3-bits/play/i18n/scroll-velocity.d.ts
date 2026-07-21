import { Locale, Dict } from '../i18n';
/**
 * Local i18n dictionary for the `ScrollVelocity` demo.
 *
 * Provides `demo.scroll-velocity.*` (title / desc / shortDesc / hint), every
 * `param.scroll-velocity.*` description, and one new shared control key
 * `ctrl.mapping` (the velocity-mapping group has no pre-existing shared key).
 * Pure data; only a type import from the central `i18n` — it is eagerly globbed
 * and shallow-merged on top of the base `messages` by `i18n.ts`.
 */
export declare const dict: Record<Locale, Dict>;
