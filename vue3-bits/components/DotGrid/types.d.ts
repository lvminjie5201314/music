/**
 * Public prop contract for <DotGrid>.
 *
 * A faithful Vue3 / TypeScript port of the react-bits `DotGrid` Canvas2D
 * background. Every prop is optional and defaults to the react-bits values
 * (applied in the SFC via `withDefaults`). The interaction uses the bundled
 * `gsap` for the push + elastic return (the react-bits `InertiaPlugin` is a
 * GSAP Club plugin and is not part of the free `gsap` package, so we emulate
 * the inertia with a free `gsap.to` throw + elastic snap-back).
 */
/** Public props for <DotGrid>. All optional. */
export interface DotGridProps {
    /** Diameter of each dot in px. */
    dotSize?: number;
    /** Gap between dots in px. */
    gap?: number;
    /** Resting dot color (hex). */
    baseColor?: string;
    /** Color of dots near the pointer (hex). */
    activeColor?: string;
    /** Distance (px) within which dots light up near the pointer. */
    proximity?: number;
    /** Pointer speed (px/s) required to trigger an inertia push. */
    speedTrigger?: number;
    /** Radius (px) of the click shockwave. */
    shockRadius?: number;
    /** Strength of the click shockwave push. */
    shockStrength?: number;
    /** Maximum pointer speed (px/s) clamp. */
    maxSpeed?: number;
    /** Inertia resistance proxy (higher = snappier push). */
    resistance?: number;
    /** Duration (s) of the elastic return to rest. */
    returnDuration?: number;
    /** Extra CSS class applied to the root element. */
    className?: string;
    /** Inline style merged onto the root element. */
    style?: Record<string, string>;
}
/** Single source of truth for every <DotGrid> default. */
export declare const DEFAULT_DOT_GRID_PROPS: {
    readonly dotSize: 16;
    readonly gap: 32;
    readonly baseColor: "#5227FF";
    readonly activeColor: "#5227FF";
    readonly proximity: 150;
    readonly speedTrigger: 100;
    readonly shockRadius: 250;
    readonly shockStrength: 5;
    readonly maxSpeed: 5000;
    readonly resistance: 750;
    readonly returnDuration: 1.5;
    readonly className: "";
    readonly style: undefined;
};
