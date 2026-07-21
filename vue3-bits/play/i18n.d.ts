/**
 * Minimal, dependency-free i18n for the play (demo) area.
 *
 * A single reactive `locale` ref plus a `t(key)` lookup. Two dictionaries are
 * bundled (zh-CN / en-US). Because `t` reads `locale.value` on every call, any
 * template using `{{ t('key') }}` re-renders automatically when `locale` flips.
 */
export type Locale = 'zh-CN' | 'en-US';
export type Dict = Record<string, string>;
/** Reactive active locale. */
export declare const locale: import('vue').Ref<Locale, Locale>;
/** Translate a key for the active locale (falls back to en-US, then the key). */
export declare function t(key: string): string;
/** Switch the active locale and persist it. */
export declare function setLocale(next: Locale): void;
