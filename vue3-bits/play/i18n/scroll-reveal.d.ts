import { Locale, Dict } from '../i18n';
/**
 * Local i18n dictionary for the `ScrollReveal` demo + component.
 *
 * `demo.scroll-reveal.*` and `param.scroll-reveal.*` are the component-specific
 * keys (title / desc / shortDesc + per-prop descriptions). The four `ctrl.*`
 * keys (`scrollable`, `enableBlur`, `blurStrength`, `baseRotation`) are new
 * reveal-specific controls not present in the shared base dictionary, so they
 * are provided here; `ctrl.text`, `ctrl.appearance` and `ctrl.opacity` are
 * reused from the base `messages`. Pure data — only a type import on `i18n.ts`.
 */
export declare const dict: Record<Locale, Dict>;
