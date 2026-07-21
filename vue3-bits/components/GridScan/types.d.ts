/**
 * Public prop contract for <GridScan>.
 *
 * 1:1 Vue3 / TypeScript port of the react-bits `GridScan` background. Every
 * prop is optional and defaults to the react-bits values. The render engine
 * (`gridScanEngine.ts`) is a three.js port (WebGLRenderer + full-screen
 * ShaderMaterial) with a three-native post chain — the react-bits source used
 * the `postprocessing` library and `face-api.js`, neither of which is a
 * dependency of vue3-bits, so the bloom / chromatic-aberration are rebuilt with
 * `three/examples/jsm` (still bundled with peer `three`, 0 new deps) and the
 * webcam face-tracking branch is intentionally dropped.
 */
/** Visual style of the grid lines. */
export type GridScanLineStyle = 'solid' | 'dashed' | 'dotted';
/** Direction the scan pulse travels. */
export type GridScanScanDirection = 'forward' | 'backward' | 'pingpong';
/** Public props for <GridScan>. All optional. */
export interface GridScanProps {
    /** Enable webcam face tracking (dropped in this port — no face-api dep). */
    enableWebcam?: boolean;
    /** Show the (unused) webcam preview overlay. */
    showPreview?: boolean;
    /** face-api model path (ignored in this port). */
    modelsPath?: string;
    /** Pointer responsiveness (0..1). */
    sensitivity?: number;
    /** Grid line thickness. */
    lineThickness?: number;
    /** Grid line color (hex). */
    linesColor?: string;
    /** Grid scale (cell size). */
    gridScale?: number;
    /** Line style. */
    lineStyle?: GridScanLineStyle;
    /** Per-line jitter amount (0..1). */
    lineJitter?: number;
    /** Enable the three-native post chain (bloom + chromatic aberration). */
    enablePost?: boolean;
    /** Bloom strength. */
    bloomIntensity?: number;
    /** Bloom luminance threshold. */
    bloomThreshold?: number;
    /** Bloom luminance smoothing. */
    bloomSmoothing?: number;
    /** Chromatic aberration offset. */
    chromaticAberration?: number;
    /** Noise amount applied to the grid. */
    noiseIntensity?: number;
    /** Scan pulse color (hex). */
    scanColor?: string;
    /** Scan pulse opacity. */
    scanOpacity?: number;
    /** Scan direction. */
    scanDirection?: GridScanScanDirection;
    /** Scan softness. */
    scanSoftness?: number;
    /** Scan glow. */
    scanGlow?: number;
    /** Scan phase taper. */
    scanPhaseTaper?: number;
    /** Scan cycle duration (s). */
    scanDuration?: number;
    /** Scan delay before each cycle (s). */
    scanDelay?: number;
    /** Enable gyroscope (device orientation) input. */
    enableGyro?: boolean;
    /** Push a scan pulse on click. */
    scanOnClick?: boolean;
    /** Delay (ms) before the camera snaps back to center on pointer leave. */
    snapBackDelay?: number;
    /** Extra CSS class applied to the container element. */
    className?: string;
    /** Inline style object (mirrors react-bits `style`). */
    style?: Record<string, string>;
}
/** Single source of truth for every <GridScan> default. */
export declare const DEFAULT_GRID_SCAN_PROPS: {
    readonly enableWebcam: false;
    readonly showPreview: false;
    readonly modelsPath: "https://cdn.jsdelivr.net/gh/justadudewhohacks/face-api.js@0.22.2/weights";
    readonly sensitivity: 0.55;
    readonly lineThickness: 1;
    readonly linesColor: "#2F293A";
    readonly scanColor: "#FF9FFC";
    readonly scanOpacity: 0.4;
    readonly gridScale: 0.1;
    readonly lineStyle: "solid";
    readonly lineJitter: 0.1;
    readonly scanDirection: "pingpong";
    readonly enablePost: true;
    readonly bloomIntensity: 0;
    readonly bloomThreshold: 0;
    readonly bloomSmoothing: 0;
    readonly chromaticAberration: 0.002;
    readonly noiseIntensity: 0.01;
    readonly scanGlow: 0.5;
    readonly scanSoftness: 2;
    readonly scanPhaseTaper: 0.9;
    readonly scanDuration: 2;
    readonly scanDelay: 2;
    readonly enableGyro: false;
    readonly scanOnClick: false;
    readonly snapBackDelay: 250;
    readonly className: "";
    readonly style: undefined;
};
