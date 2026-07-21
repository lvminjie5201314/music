import { Locale, Dict } from '../i18n';
/**
 * Local i18n dictionary for the `PixelCard` demo.
 *
 * Every visible string in `PixelCardDemo.vue` is routed through `t()`; the keys
 * below are merged into the base dictionary by `i18n.ts`. Does not touch the
 * base file.
 *
 * Keys follow the convention:
 *   demo.pixel-card.{title,desc,shortDesc}
 *   ctrl.<prop>          → control labels
 *   param.pixel-card.<prop>.desc → prop descriptions in the params table
 */
export declare const dict: Record<Locale, Dict>;
