/**
 * Public type contract for <SplashCursor>.
 *
 * A faithful Vue 3 port of the react-bits `SplashCursor` (#70): a full-screen
 * WebGL2 fluid (Navier–Stokes / "stable fluids") cursor effect. Moving the
 * pointer injects colored velocity + dye splats into a ping-pong simulation
 * that advects / dissipates / pressures over time; clicking fires a brighter
 * burst. Rendered on a raw `WebGL2RenderingContext` (no three.js / R3F, zero new
 * runtime dependencies) — the same engine Pavel Dobryakov's WebGL-Fluid-
 * Simulation uses, hand-ported from the react-bits source.
 *
 * React → Vue mapping:
 *  - the giant `useEffect` (WebGL setup + listeners + rAF loop) → a `setup()`
 *    function run in `onMounted`; its teardown runs in `onUnmounted` (and before
 *    every re-run driven by the prop `watch`), mirroring the source's dependency
 *    array while fixing its missing cleanup (the react-bits effect never removed
 *    its listeners / cancelled the rAF).
 *  - `useRef<HTMLCanvasElement>` → `ref<HTMLCanvasElement | null>`.
 *  - all mutable WebGL state (`gl`, framebuffers, pointers, raf id) are plain
 *    `let` bindings inside `setup()` (no reactivity needed).
 *
 * The prop names follow the react-bits `SplashCursorProps` interface verbatim
 * (camelCased) with the exact default VALUES from the source signature.
 */
export interface ColorRGB {
    /** Red channel, 0..1 (linear-ish, the sim scales it down internally). */
    r: number;
    /** Green channel, 0..1. */
    g: number;
    /** Blue channel, 0..1. */
    b: number;
}
/**
 * Public prop contract for <SplashCursor>.
 *
 * Every field is optional and falls back to the react-bits defaults below. The
 * fluid parameters (`densityDissipation`, `velocityDissipation`, `pressure`,
 * `curl`, `splatRadius`, `splatForce`, `colorUpdateSpeed`, `pressureIterations`,
 * the resolution props) tune the simulation; `shading`, `transparent`,
 * `rainbowMode` and `color`/`backColor` tune the look.
 */
export interface SplashCursorProps {
    /** Resolution of the velocity / pressure simulation grid. */
    simResolution?: number;
    /** Resolution of the dye (color) buffer — higher = crisper trails. */
    dyeResolution?: number;
    /** Resolution used when capturing a screenshot (unused by the sim, kept for parity). */
    captureResolution?: number;
    /** How fast the dye fades (higher = shorter trails). */
    densityDissipation?: number;
    /** How fast the velocity field fades (higher = motion settles quicker). */
    velocityDissipation?: number;
    /** Pressure stiffness for the incompressibility solve. */
    pressure?: number;
    /** Jacobi iterations of the pressure solve (higher = more accurate, costlier). */
    pressureIterations?: number;
    /** Vorticity (curl) amount — adds swirly detail. */
    curl?: number;
    /** Radius of each splat (in sim units; divided by 100 internally). */
    splatRadius?: number;
    /** Force injected by a pointer move / click splat. */
    splatForce?: number;
    /** Enable the cheap shading pass (fake lighting from the dye gradient). */
    shading?: boolean;
    /** How often (per second) the pointer color is re-rolled in rainbow mode. */
    colorUpdateSpeed?: number;
    /** Clear / fallback background color of the dye buffer (0..1 channels). */
    backColor?: ColorRGB;
    /** Render the canvas with an alpha channel (true = fluid over the page). */
    transparent?: boolean;
    /** Cycle pointer splat colors through the hue wheel; false = use `color`. */
    rainbowMode?: boolean;
    /** Fixed splat color when `rainbowMode` is false (CSS hex). */
    color?: string;
}
export declare const DEFAULT_SIM_RESOLUTION = 128;
export declare const DEFAULT_DYE_RESOLUTION = 1440;
export declare const DEFAULT_CAPTURE_RESOLUTION = 512;
export declare const DEFAULT_DENSITY_DISSIPATION = 3.5;
export declare const DEFAULT_VELOCITY_DISSIPATION = 2;
export declare const DEFAULT_PRESSURE = 0.1;
export declare const DEFAULT_PRESSURE_ITERATIONS = 20;
export declare const DEFAULT_CURL = 3;
export declare const DEFAULT_SPLAT_RADIUS = 0.2;
export declare const DEFAULT_SPLAT_FORCE = 6000;
export declare const DEFAULT_SHADING = true;
export declare const DEFAULT_COLOR_UPDATE_SPEED = 10;
export declare const DEFAULT_BACK_COLOR: ColorRGB;
export declare const DEFAULT_TRANSPARENT = true;
export declare const DEFAULT_RAINBOW_MODE = true;
export declare const DEFAULT_COLOR = "#ff0000";
