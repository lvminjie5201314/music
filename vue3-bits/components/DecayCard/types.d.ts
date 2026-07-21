/**
 * Public prop contract for <DecayCard>.
 *
 * A Vue3 port of the react-bits `DecayCard`. The original already uses the
 * bundled `gsap` plus a native SVG `feTurbulence` / `feDisplacementMap` filter,
 * so there are no extra dependencies to remove — this port simply moves the
 * React `useEffect` rAF loop into Vue `onMounted` / `onBeforeUnmount` and the
 * children into the default slot. The cursor-driven displacement + drift is
 * 1:1 with the original.
 */
export interface DecayCardProps {
    /** Card width in px. */
    width?: number;
    /** Card height in px. */
    height?: number;
    /** Background image URL (default is a grayscale placeholder). */
    image?: string;
    /** `feTurbulence` baseFrequency. */
    baseFrequency?: number;
    /** `feTurbulence` numOctaves. */
    numOctaves?: number;
    /** `feTurbulence` seed. */
    seed?: number;
    /** Max displacement scale applied by `feDisplacementMap`. */
    maxDisplacement?: number;
    /** Max drift (px) of the image away from center. */
    movementBound?: number;
}
export declare const DEFAULT_DECAY_CARD_PROPS: {
    width: number;
    height: number;
    image: string;
    baseFrequency: number;
    numOctaves: number;
    seed: number;
    maxDisplacement: number;
    movementBound: number;
};
