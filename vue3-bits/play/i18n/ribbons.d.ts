import { Locale, Dict } from '../i18n';
/**
 * Local i18n dictionary for the `Ribbons` demo + component.
 *
 * Pure data — only a type import from the central `i18n.ts`. It is eagerly
 * globbed by `i18n.ts` (`import.meta.glob('./i18n/*.ts')`, eager) and
 * shallow-merged on top of the base `messages`: local keys override base keys
 * of the same name, while every pre-existing base key is untouched. This lets
 * parallel engineers each add their own `i18n/<id>.ts` (different filenames,
 * zero conflict) without ever touching `i18n.ts`.
 *
 * NOTE on format: the work-order sketched `export const dict = { 'zh-CN':
 * {title, desc}, 'en': {...} }`, but the real `i18n.ts` glob only merges
 * locales `'zh-CN'` and `'en-US'` and the demo resolves titles via
 * `t('demo.ribbons.title')` / `t('demo.ribbons.desc')`. To keep the demo
 * actually working we follow the established `cubes.ts` convention here
 * (`Record<Locale, Dict>` with `demo.<id>.*` / `param.<id>.*` keys) rather than
 * the loose sketch.
 */
export declare const dict: Record<Locale, Dict>;
