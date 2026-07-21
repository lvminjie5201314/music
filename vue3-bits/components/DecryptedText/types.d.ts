/**
 * Public prop contract for <DecryptedText>.
 *
 * A Vue 3 port of the react-bits `DecryptedText` decrypting text. Every prop
 * mirrors the react-bits source 1:1 (name, type, default). `text` is required
 * (react-bits has no default for it), all others fall back to the react-bits
 * defaults via `withDefaults` in `DecryptedText.vue`.
 */
/** Order in which characters are revealed during the decrypt. */
export type RevealDirection = 'start' | 'end' | 'center';
/** What triggers the decrypt animation. */
export type AnimateOn = 'view' | 'hover' | 'inViewHover' | 'click';
/** Behaviour when `animateOn === 'click'`. */
export type ClickMode = 'once' | 'toggle';
export interface DecryptedTextProps {
    /** The target text the scramble decrypts into. Required. */
    text: string;
    /** Scramble refresh interval in milliseconds. Lower = faster. */
    speed?: number;
    /** In non-sequential mode, snap to the final text after this many iterations. */
    maxIterations?: number;
    /** Reveal characters one at a time along `revealDirection` instead of all at once. */
    sequential?: boolean;
    /** Direction the decrypt "sweeps" through the string. */
    revealDirection?: RevealDirection;
    /** Scramble using only characters already present in `text` (spaces excluded). */
    useOriginalCharsOnly?: boolean;
    /** Pool of characters used while scrambling. */
    characters?: string;
    /** CSS class applied to each already-revealed character `<span>`. */
    className?: string;
    /** CSS class applied to the outer wrapper `<span>`. */
    parentClassName?: string;
    /** CSS class applied to each still-encrypted character `<span>`. */
    encryptedClassName?: string;
    /** What triggers the decrypt animation. */
    animateOn?: AnimateOn;
    /** Behaviour when `animateOn === 'click'`. */
    clickMode?: ClickMode;
}
