/**
 * Public prop contract for <Ballpit>.
 *
 * A faithful Vue3 / TypeScript port of the react-bits `Ballpit` component
 * (react-bits.md §29). The original is a **three.js** implementation (not ogl):
 * it renders an `InstancedMesh` of physically-based spheres inside an
 * environment-mapped scene, driven by a custom particle-physics solver. We keep
 * the prop API byte-for-byte equivalent (the component spreads every extra prop
 * into the engine config).
 *
 * The three.js engine lives in `ballpitEngine.ts` (peer `three`, already used by
 * the `LiquidEther` / `FloatingLines` ports — no new dependency added).
 */
/** Public props for <Ballpit>. All optional. */
export interface BallpitProps {
    /** Extra CSS class applied to the canvas. */
    className?: string;
    /** Whether the first sphere tracks the pointer (react-bits default: true). */
    followCursor?: boolean;
    /** Number of balls. */
    count?: number;
    /** Downward acceleration per second. */
    gravity?: number;
    /** Velocity retained per frame (0..1, closer to 1 = less drag). */
    friction?: number;
    /** Energy kept after a wall hit. */
    wallBounce?: number;
    /** Ambient light color (hex int). */
    ambientColor?: number;
    /** Ambient light intensity. */
    ambientIntensity?: number;
    /** Point light intensity. */
    lightIntensity?: number;
    /** Palette of ball colors (hex ints). */
    colors?: number[];
    /** Bounds of the simulation box (X/Y/Z half-extents). */
    maxX?: number;
    maxY?: number;
    maxZ?: number;
    /** Min / max per-ball radius. */
    minSize?: number;
    maxSize?: number;
    /** Radius of the controlled (index 0) sphere. */
    size0?: number;
    /** Velocity clamp. */
    maxVelocity?: number;
    /** MeshPhysicalMaterial overrides. */
    materialParams?: Record<string, unknown>;
    /** Whether the index-0 sphere is pointer-controlled. */
    controlSphere0?: boolean;
}
/** Single source of truth for every <Ballpit> default (mirrors react-bits XConfig). */
export declare const DEFAULT_BALLPIT_PROPS: {
    readonly className: "";
    readonly followCursor: true;
    readonly count: 200;
    readonly colors: number[];
    readonly ambientColor: 16777215;
    readonly ambientIntensity: 1;
    readonly lightIntensity: 200;
    readonly materialParams: {
        readonly metalness: 0.5;
        readonly roughness: 0.5;
        readonly clearcoat: 1;
        readonly clearcoatRoughness: 0.15;
    };
    readonly minSize: 0.5;
    readonly maxSize: 1;
    readonly size0: 1;
    readonly gravity: 0.5;
    readonly friction: 0.9975;
    readonly wallBounce: 0.95;
    readonly maxVelocity: 0.15;
    readonly maxX: 5;
    readonly maxY: 5;
    readonly maxZ: 2;
    readonly controlSphere0: false;
};
