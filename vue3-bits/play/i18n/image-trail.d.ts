import { Locale, Dict } from '../i18n';
/**
 * Local i18n dictionary for the `ImageTrail` demo + component.
 *
 * Pure data — only a type import from the central `i18n.ts`. It is eagerly
 * globbed by `i18n.ts` and shallow-merged on top of the base messages, so every
 * `demo.image-trail.*` / `param.image-trail.*` key below is available via `t()`
 * in `ImageTrailDemo.vue` without touching the base dictionary.
 *
 * Reused shared control-group keys (from the base `i18n.ts`): `ctrl.appearance`,
 * `install.title`, `usage.title`, `usage.copy`, `usage.copied`, `params.*`.
 */
export declare const dict: Record<Locale, Dict>;
