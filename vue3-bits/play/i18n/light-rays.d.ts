import { Locale, Dict } from '../i18n';
/**
 * Local i18n dictionary for the legacy `LightRays` demo.
 *
 * The demo (`LightRaysDemo.vue`) already routes every visible string through
 * `t()`; these are the `ctrl.*` labels it references that were missing from the
 * base dictionary. The parameter-table descriptions already live in the base
 * `param.light-rays.<prop>.desc` keys, so only the control labels are supplied
 * here. Merged into the base by `i18n.ts`; does not touch the base file.
 */
export declare const dict: Record<Locale, Dict>;
