import { Locale, Dict } from '../i18n';
/**
 * Local i18n dictionary for the legacy `LiquidEther` demo.
 *
 * These `ctrl.*` keys were referenced by `LiquidEtherDemo.vue` (or hardcoded as
 * English labels) but missing from the base `messages` — they are now provided
 * here so the control bar + simulation/auto groups render bilingually. Pure
 * data; no runtime dependency on `i18n.ts` (only a type import).
 */
export declare const dict: Record<Locale, Dict>;
