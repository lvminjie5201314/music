import { Locale, Dict } from '../i18n';
/**
 * Local i18n dictionary for the DotField demo.
 *
 * Conflicts-free: this file is eagerly globbed by `i18n.ts` and shallow-merged
 * on top of the base messages. Keys are namespaced by `dot-field` so they
 * never collide with other components' dictionaries.
 */
export declare const dict: Record<Locale, Dict>;
