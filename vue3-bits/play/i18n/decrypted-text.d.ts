import { Locale, Dict } from '../i18n';
/**
 * Local i18n dictionary for the `DecryptedText` demo.
 *
 * Pure data — only a type import from `i18n.ts`. Provided keys:
 * `demo.decrypted-text.*` (title / desc / shortDesc) and
 * `param.decrypted-text.*` (one description per prop). All control-group
 * titles reuse shared `ctrl.*` keys that already exist in the base messages
 * (text / motion / interaction / appearance), so no new `ctrl.*` entries are
 * added here.
 */
export declare const dict: Record<Locale, Dict>;
