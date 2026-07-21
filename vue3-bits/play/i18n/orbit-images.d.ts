import { Locale, Dict } from '../i18n';
/**
 * Local i18n dictionary for the `OrbitImages` demo + component.
 *
 * Pure data — only a type import from the central `i18n.ts`. It is eagerly
 * globbed by `i18n.ts` and shallow-merged on top of the base messages, so every
 * `demo.orbit-images.*` / `param.orbit-images.*` key below is available via
 * `t()` in `OrbitImagesDemo.vue` without touching the base dictionary.
 *
 * Reused shared control keys: `ctrl.motion`, `ctrl.appearance`. Two new shared
 * group-title keys are added here — `ctrl.images` and `ctrl.path` — which do
 * not collide with any existing base key. All `param.orbit-images.*` keys are
 * namespaced and conflict-free.
 */
export declare const dict: Record<Locale, Dict>;
