/**
 * Public prop contract for <OptionWheel>.
 *
 * A Vue 3 port of the react-bits `OptionWheel` (react-bits #75): a rotary
 * wheel selector whose options are laid out along a CSS curve and spun to the
 * selected index. The React `onChange` callback is preserved verbatim as a
 * function prop; in Vue you can also bind it with `@change`.
 */
export type OptionWheelSide = 'left' | 'right';
export interface OptionWheelProps {
    /** The options shown on the wheel. */
    items?: string[];
    /** Index selected on first mount. */
    defaultSelected?: number;
    /** Fired when the settled selection changes (index + label). */
    onChange?: (index: number, item: string) => void;
    /** Inactive option color. */
    textColor?: string;
    /** Active (centered) option color. */
    activeColor?: string;
    /** Which side the options anchor to. */
    side?: OptionWheelSide;
    /** Option font size in rem. */
    fontSize?: number;
    /** Vertical spacing multiplier between rows (× font size). */
    spacing?: number;
    /** How much the arc curls toward the anchor side. */
    curve?: number;
    /** Tilt of the wheel in degrees (drives the curl radius). */
    tilt?: number;
    /** Blur amount applied per unit of distance from center. */
    blur?: number;
    /** Opacity falloff per unit of distance from center. */
    fade?: number;
    /** Floor for option opacity at the edges. */
    minOpacity?: number;
    /** Easing time constant for the spin (ms). Lower = snappier. */
    smoothing?: number;
    /** Horizontal inset of the options from the anchor edge (px). */
    inset?: number;
    /** Wrap around past the first / last option. */
    loop?: boolean;
    /** Allow click-drag / touch scrubbing. */
    draggable?: boolean;
    /** Optional click sound URL (empty = silent). */
    soundUrl?: string;
    /** Click sound volume (0..1). */
    soundVolume?: number;
    /** Extra CSS class appended to the root element. */
    className?: string;
}
