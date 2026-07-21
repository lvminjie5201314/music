/**
 * LiquidEther — public prop contract (Vue3 / three.js port of react-bits #13).
 *
 * These mirror the react-bits `LiquidEtherProps` interface 1:1. Defaults are
 * exported separately so both the `.vue` shell (`withDefaults`) and the engine
 * (`createLiquidEther`) can share the exact same fall-back values.
 */
export interface LiquidEtherProps {
    /** Strength of the force injected by the pointer / auto driver. */
    mouseForce?: number;
    /** Radius (in simulation cells) of the injected force brush. */
    cursorSize?: number;
    /** Enable the viscous (diffusion) solve. */
    isViscous?: boolean;
    /** Viscosity coefficient used when `isViscous` is true. */
    viscous?: number;
    /** Jacobi iterations for the viscous solve. */
    iterationsViscous?: number;
    /** Jacobi iterations for the pressure (Poisson) solve. */
    iterationsPoisson?: number;
    /** Simulation time step. */
    dt?: number;
    /** Use BFECC advection (higher quality) instead of plain semi-Lagrangian. */
    BFECC?: boolean;
    /** Simulation resolution as a fraction of the container size (0..1). */
    resolution?: number;
    /** Bounce velocity at the boundary instead of a free-slip wall. */
    isBounce?: boolean;
    /** Palette colours (hex strings) mapped to the velocity magnitude. */
    colors?: string[];
    /** Extra class applied to the root container (does not override base class). */
    className?: string;
    /** Run the autonomous mouse-driver demo when the user is idle. */
    autoDemo?: boolean;
    /** Speed of the auto driver. */
    autoSpeed?: number;
    /** Multiplier applied to the auto driver's pointer delta. */
    autoIntensity?: number;
    /** Seconds the auto driver spends taking over from the user's pointer. */
    takeoverDuration?: number;
    /** Idle milliseconds before the auto driver resumes. */
    autoResumeDelay?: number;
    /** Ramp-up duration (seconds) of the auto driver after resume. */
    autoRampDuration?: number;
}
/** Default values — identical to the react-bits component's destructured defaults. */
export declare const defaultLiquidEtherProps: Required<LiquidEtherProps>;
