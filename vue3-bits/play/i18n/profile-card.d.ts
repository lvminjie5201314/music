import { Locale, Dict } from '../i18n';
/**
 * Local i18n dictionary for the `ProfileCard` demo + component.
 *
 * Pure data — only a type import from the central `i18n.ts`. It is eagerly
 * globbed by `i18n.ts` (`./i18n/*.ts`) and shallow-merged on top of the base
 * messages, so every `demo.profile-card.*` / `param.profile-card.*` key below
 * is available via `t()` in `ProfileCardDemo.vue` without touching the base
 * dictionary.
 *
 * Reused shared control keys (from the base `i18n.ts`): `ctrl.appearance`,
 * `ctrl.interaction`. The `param.profile-card.*` keys map 1:1 onto the
 * `ProfileCardProps` fields.
 */
export declare const dict: Record<Locale, Dict>;
